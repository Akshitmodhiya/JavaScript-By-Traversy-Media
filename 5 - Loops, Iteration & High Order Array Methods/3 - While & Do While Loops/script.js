let i = 0;
// While
while (i <= 20) {
  console.log('Number ' + i);
  i++;
}

// Loop Over Arrays
const arr = [10, 20, 30, 40, 50];
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// Nesting while loops
// let i = 1;
while (i <= 5) {
  console.log('Number ' + i);
  let j = 1;
  while (j <= 5) {
    console.log(`${i} * ${j}= ${i * j} `);
    j++;
  }
  i++;
}


// DO WHile
do {
  console.log('Number ' + i);
  i++;
} while (i <= 20);