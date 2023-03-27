const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

// Short
const sum2 = numbers.reduce((acc, cur) => acc + cur, 10);

console.log(sum);
console.log(sum2);


// Using a for loop
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

console.log(sum3());


// Shopping cart
const cart = [
  { id: 1, name: 'Product1', price: 100 },
  { id: 2, name: 'Product2', price: 200 },
  { id: 3, name: 'Product3', price: 300 },
];

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

console.log(total);