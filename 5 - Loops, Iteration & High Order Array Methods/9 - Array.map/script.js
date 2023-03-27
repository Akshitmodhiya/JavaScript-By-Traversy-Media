const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleNumbers = numbers.map((number) => number * 2);
// console.log(doubleNumbers);


// Same with forEach
const doubleNumbers2 = [];
numbers.forEach((number) => {
  doubleNumbers2.push(number * 2);
});

// console.log(doubleNumbers2);


const companies = [
  { name: 'Company1', category: 'Finance', start: 1980, end: 1995 },
  { name: 'Company2', category: 'Retail', start: 1990, end: 1999 },
  { name: 'Company3', category: 'Auto', start: 1995, end: 2007 },
  { name: 'Company4', category: 'Tech', start: 2000, end: 2010 },
  { name: 'Company5', category: 'Auto', start: 2010, end: 2020 },
  { name: 'Company6', category: 'Retail', start: 1996, end: 2006 },
  { name: 'Company7', category: 'Finance', start: 1992, end: 1998 },
  { name: 'Company8', category: 'Tech', start: 1988, end: 2008 },
];

// Create an array of company names
const companyNames = companies.map((company) => company.name);
// console.log(companyNames);


// Create an array of just names and categories
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
// console.log(companyInfo);


// Create an array of the object with the name and length of each company in years
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + ' Years',
  };
});
// console.log(companyYears);


// Chain Map Methods
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
  })

// console.log(squareAndDouble2);


// Chaining Different Methods
const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(evenDouble);