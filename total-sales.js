function totalSales(products, taxrate) {
  const totalSales = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const taxAmount = (totalSales * taxrate) / 100;
  const finalAmount = totalSales + taxAmount;
  return parseFloat(finalAmount.toFixed(2));
}

const products = [
  { product: "apple", price: 0.5, quantity: 10 },
  { product: "banana", price: 0.3, quantity: 8 },
  { product: "pineapple", price: 0.8, quantity: 4 },
];
console.log(totalSales(products, 8));
