const products = [
  { name: "Chocolate", price: 0.9, quantity: 3 },
  { name: "Pencil", price: 0.2, quantity: 12 },
  { name: "copy", price: 0.6, quantity: 8 },
];
console.log(countSale(products, 6));

function countSale(products, tax) {
  const sale = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const totalTax = (sale * tax) / 100;
  const total = sale + totalTax;
  return parseFloat(total.toFixed(2));
}
