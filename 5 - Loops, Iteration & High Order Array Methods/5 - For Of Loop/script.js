// Loop through arrays
const items = ['Book', 'Table', 'Chair', 'Kite'];
const users = [
  { name: 'Akshit' },
  { name: 'Modhiya' },
  { age: 26 }
]
for (const item of items) {
  console.log(item);
}
for (const user of users) {
  console.log(user.name);
}


// Loop Over Strings
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}


// Loop over maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key, value);
}