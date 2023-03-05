let x;

const arr = [10, 20, 30, 40, 50, 60];

// arr.push(70);

// arr.pop(); // last number will be remove

// arr.unshift(0); // number will be add from start

// arr.shift(); // number will be remove 

// // arr.reverse();

x = arr.includes(20); // Check if this number is in array or not

x = arr.indexOf(300);

x = arr.slice(1, 3);

// x = arr.splice(1, 3);

// x = arr.splice(3, 1); // 3 indicates index and 1 indicate how many value 

x = arr.splice(1, 3);

console.log(x, arr);