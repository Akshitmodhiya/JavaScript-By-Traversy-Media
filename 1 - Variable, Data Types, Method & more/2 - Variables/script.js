// Ways to declare a variable
// Var, Let, Const

let firstName = 'Akshit';
let lastName = 'Modhiya';

console.log(firstName, lastName);

let age = 26;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollor signs
// - can't start with a number

// Multi-word Formatting
// firstName = camelCase
// firt_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning values
age = 27;
console.log(age);


let score;
score = 1;
console.log(score);
if (true) {
  score = score + 1;
}
console.log(score);


const x = 100;


const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);


const person = {
  name: 'Brad'
};
person.name = 'John';
person.email = 'Brad@gmail.com';
console.log(person);


// Declare Multiple Values
let a, b, c;

const d = 10, e = 20, f = 30;

console.log(d);
