// Function Declaration
function addDollarSign(value) {
  return '$' + value;
}

console.log(addDollarSign(100));


// Function Expression
const addPlusSign = function (value) {
  return '+' + value;
}; // This semicolon is imp for expression

console.log(addPlusSign(200));