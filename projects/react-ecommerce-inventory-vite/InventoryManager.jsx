import { useReducer, useRef, useCallback, useState } from 'react';
import './InventoryManager.css';

const initialState = {
  products: [
    { id: 1, name: 'Teclado Mecánico RGB', stock: 12, price: 89.99 },
    { id: 2, name: 'Mouse Inalámbrico Ergonómico', stock: 25, price: 45.50 },
    { id: 3, name: 'Monitor Ultrawide 34"', stock: 4, price: 399.00 }
  ],
  filter: 'ALL'
};

function inventoryReducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, products: [action.payload, ...state.products] };
    case 'DELETE_PRODUCT':
      return { ...state, products: state.products.filter(p => p.id !== action.payload) };
    case 'UPDATE_STOCK':
      return {
        ...state,
        products: state.products.map(p =>
          p.id === action.payload.id
            ? { ...p, stock: Math.max(0, p.stock + action.payload.amount) }
            : p
        )
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

function InventoryManager() {
  const [state, dispatch] = useReducer(inventoryReducer, initialState);
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');

  // useRef para manipular directamente el foco del input principal
  const nameInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || stock === '' || price === '') return;

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      stock: Number(stock),
      price: Number(price)
    };

    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
    setName('');
    setStock('');
    setPrice('');
    
    // Regresar el foco al input usando useRef
    nameInputRef.current.focus();
  };

  // useCallback para optimizar acciones pasadas a elementos de la lista
  const handleDelete = useCallback((id) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  }, []);

  const handleUpdateStock = useCallback((id, amount) => {
    dispatch({ type: 'UPDATE_STOCK', payload: { id, amount } });
  }, []);

  const filteredProducts = state.products.filter(product => {
    if (state.filter === 'LOW_STOCK') return product.stock <= 5;
    return true;
  });

  return (
    <div className="inventory-container">
      <h2>📦 Gestor de Inventario E-Commerce</h2>

      <form onSubmit={handleSubmit} className="inventory-form">
        <input
          ref={nameInputRef}
          type="text"
          placeholder="Nombre del producto..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="inv-input"
        />
        <input
          type="number"
          placeholder="Stock"
          min="0"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="inv-input-small"
        />
        <input
          type="number"
          placeholder="Precio ($)"
          min="0"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="inv-input-small"
        />
        <button type="submit" className="inv-btn-primary">Registrar</button>
      </form>

      <div className="filter-bar">
        <button 
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'ALL' })}
          className={`filter-btn ${state.filter === 'ALL' ? 'active' : ''}`}
        >
          Todos ({state.products.length})
        </button>
        <button 
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'LOW_STOCK' })}
          className={`filter-btn ${state.filter === 'LOW_STOCK' ? 'active' : ''}`}
        >
          Stock Bajo (≤ 5)
        </button>
      </div>

      <div className="table-responsive">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Stock</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan="4" className="empty-row">No hay productos registrados.</td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr key={product.id} className={product.stock <= 5 ? 'low-stock-row' : ''}>
                  <td>{product.name}</td>
                  <td>
                    <span className={`stock-badge ${product.stock <= 5 ? 'danger' : ''}`}>
                      {product.stock} un.
                    </span>
                  </td>
                  <td>${product.price.toFixed(2)}</td>
                  <td className="actions-cell">
                    <button onClick={() => handleUpdateStock(product.id, 1)} title="Aumentar stock">➕</button>
                    <button onClick={() => handleUpdateStock(product.id, -1)} title="Reducir stock">➖</button>
                    <button onClick={() => handleDelete(product.id)} className="delete-action" title="Eliminar">❌</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryManager;