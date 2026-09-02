import { useState } from 'react';
import './ShoppingList.css';

function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, text: 'Manzanas', purchased: false },
    { id: 2, text: 'Leche', purchased: true },
    { id: 3, text: 'Pan integral', purchased: false }
  ]);
  const [inputText, setInputText] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newItem = {
      id: Date.now(),
      text: inputText.trim(),
      purchased: false
    };

    setItems([...items, newItem]);
    setInputText('');
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const togglePurchased = (id) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    );
  };

  return (
    <div className="shopping-container">
      <h2>🛒 Lista de Compras Inteligente</h2>
      
      <form onSubmit={handleAddItem} className="shopping-form">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Añadir nuevo producto..."
          className="shopping-input"
        />
        <button type="submit" className="shopping-btn">Agregar</button>
      </form>

      <ul className="shopping-list">
        {items.length === 0 ? (
          <p className="empty-msg">Tu lista está vacía. ¡Agrega algo!</p>
        ) : (
          items.map((item) => (
            <li key={item.id} className={`shopping-item ${item.purchased ? 'purchased' : ''}`}>
              <span onClick={() => togglePurchased(item.id)} className="item-text">
                {item.text}
              </span>
              <button 
                onClick={() => handleDeleteItem(item.id)} 
                className="delete-btn"
                title="Eliminar producto"
              >
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
      
      <div className="shopping-footer">
        <span>Pendientes: {items.filter(i => !i.purchased).length}</span>
        <span>Comprados: {items.filter(i => i.purchased).length}</span>
      </div>
    </div>
  );
}

export default ShoppingList;