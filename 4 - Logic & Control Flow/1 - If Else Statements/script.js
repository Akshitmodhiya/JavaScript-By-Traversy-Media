if (true) {
  console.log('This is true');
}

if (false) {
  console.log('This will not work');
}

const x = 10;
const y = 5;

if (x > y) {
  console.log(`${x} is greter than ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is NOT equal to ${y}`);
}

if (x !== y) {
  const z = 20;
  console.log(`${z} is 20`);
}


// Shorthand If
if (x >= y) console.log(`${x} is greter than ${y}`),
  console.log('This is true');
else console.log('This is false');