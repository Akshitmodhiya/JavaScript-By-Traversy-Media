let x;

// Array Literal
const numbers = [12, 24, 36, 48];
const mixed = [12, 'Hello', true, null];

// Array Constructor
const fruits = new Array('Mango', 'Apple', 'Orange');

x = numbers[0];

x = numbers[0] + numbers[2];

x = `My favorite fruits is ${fruits[0]}`;

x = numbers.length;

x = numbers;

fruits[2] = 'pear';

// fruits.length = 2;

fruits[3] = 'Grapes';

fruits[fruits.length] = 'Banana';

fruits[fruits.length] = 'Pineapple';

x = fruits;

console.log(x);