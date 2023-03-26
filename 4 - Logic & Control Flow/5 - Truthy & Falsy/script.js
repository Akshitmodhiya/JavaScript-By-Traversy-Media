// Falsy Values:
// - false
// - 0
// - '' or "" (Empty String)
// - null
// - undefined
// - NaN


// Truthy Values
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = '';

if (x) {
  console.log('This is Truthy');
} else {
  console.log('This is Falsy');
}

console.log(Boolean(x));


// Truthy & Falsy caveats
const children = 0;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please Enter number of children');
}


// Checking for empty arrays
const posts = [];

if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}


// Checking for empty object
const user = {};

if (Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No User');
}


// Loose Equality (==)
console.log(false === 0); // with == it will be true
console.log('' === 0);
console.log(null === undefined);