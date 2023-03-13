const x = 100;
const foo = 1;
var bar = 2; // It will see in window object

if (true) {
  const y = 200;
  console.log(x + y);
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i);


if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(c); // a & b will not work 

function run() {
  var d = 100;
  console.log(d);
}

run();