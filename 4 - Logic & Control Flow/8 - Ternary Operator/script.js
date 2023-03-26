const age = 16;

// Using an if statement
if (age >= 18) {
  console.log('You can Vote!');
} else {
  console.log('You can not Vote!');
}


// Using Ternanry Operator
age >= 18 ? console.log('You can Drive!') : console.log('You can not Drive!');


// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can Vote!' : 'You can not Vote!';

console.log(canVote);
console.log(canVote2);



// Multiple Statements
const auth = true;
// let redirect;

// if (auth) {
//   alert('Welcome to the Dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

const redirect = auth
  ? (alert('Welcome to the dashboard'), '/dashboard')
  : (alert('Access Denied'), '/login')

console.log(redirect);

// auth ? console.log('Welcome to the dashboard') : null;

auth && console.log('Welcome to the dashboard');