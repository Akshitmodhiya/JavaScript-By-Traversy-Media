// Challenge 1
// function getCel(f) {
//   const cel = (f - 32) * 5 / 9;
//   return cel;
// }

// Arrow Function
const getCel = (f) => ((f - 32) * 5) / 9;
console.log(`The temp is ${getCel(50)} \xB0C`);


// Challenge 2
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max
  }
}

console.log(minMax([1, 2, 3, 4, 55, 6]));


// Challenge 3
((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(20, 5);