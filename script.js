/**
 * Inventory object containing items with their respective prices and quantities.
 */
const inventory = {
  apple: { price: 12, qty: 0 },
  cherry: { price: 15, qty: 0 },
  strawberry: { price: 18, qty: 0 },
};

/**
 * Calculates the total value of the inventory based on the price and quantity of each item.
 * @returns {number} The total value of the inventory.
 */
function calculateTotalValue() {
  return Object.values(inventory).reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
}

/**
 * Updates the quantity of a specified inventory item based on user input and returns the updated total value as a formatted string.
 * @param {HTMLInputElement} box - The input element containing the item id and quantity value.
 * @returns {string} The updated total value of the inventory in the format "$X.00".
 */
function updateQuantity(box) {
  const qty = box.value.length > 0 ? parseInt(box.value, 10) : 0;

  // Update the quantity of the corresponding inventory item if it exists
  if (inventory.hasOwnProperty(box.id)) {
    inventory[box.id].qty = qty;
  }

  // Calculate and return the updated total value of the inventory, formatted as a string
  const total = calculateTotalValue();
  return `$${total}.00`;
}

/**
 * Initializes the inventory calculator by setting up event listeners on input boxes.
 * Updates the total value displayed in the total container when inputs change.
 */
window.addEventListener("DOMContentLoaded", () => {
  const totalContainer = document.getElementById("total-container");
  const inputBoxes = document.querySelectorAll("#calculator input");

  inputBoxes.forEach((box) => {
    const updateTotal = () => {
      totalContainer.textContent = updateQuantity(box);
    };

    box.addEventListener("change", updateTotal);
    box.addEventListener("keyup", updateTotal);
  });
});
