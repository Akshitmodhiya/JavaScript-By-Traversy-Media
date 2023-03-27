const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

// Short
const evenNumbers = numbers.filter(number => number % 2 === 0);

// For Each
const evenNumbers = [];
numbers.forEach(number => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});
console.log(evenNumbers);



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

// Get companies whose category is Tech
const techCompanies = companies.filter((company) => company.category === 'Tech');
console.log(techCompanies);


// Get companies that strated in or after 1990 and ended in or before 2005
const earlyCompanies = companies.filter((company) => company.start >= 1990 && company.end <= 2005);
console.log(earlyCompanies);

// Get Companies that lasted 10 years or more
const longCompanies = companies.filter((company) => company.end - company.start >= 10);
console.log(longCompanies);

