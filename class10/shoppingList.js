// Shopping list array
const shoppingList = [];

// Add product
const addProduct = (product) => {
  if (!shoppingList.includes(product)) {
    shoppingList.push(product);
    console.log(`${product} added to the shopping list.`);
  } else {
    console.log(`${product} is already in the shopping list.`);
  }
};

// Remove product
const removeProduct = (product) => {
  const index = shoppingList.indexOf(product);

  if (index !== -1) {
    shoppingList.splice(index, 1);
    console.log(`${product} removed from the shopping list.`);
  } else {
    console.log(`${product} was not found in the shopping list.`);
  }
};

// Display list
const displayList = () => {
  if (shoppingList.length === 0) {
    console.log("The shopping list is empty.");
    return;
  }

  console.log("Shopping List:");
  shoppingList.forEach((product, index) => {
    console.log(`${index + 1}. ${product}`);
  });
};

// Example usage
addProduct("Milk");
addProduct("Bread");
addProduct("Eggs");
addProduct("Milk"); // Duplicate

displayList();

removeProduct("Bread");

displayList();