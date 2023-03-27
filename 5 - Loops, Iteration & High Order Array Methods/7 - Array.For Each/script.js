const socials = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'];

// console.log(socials.__proto__);

// socials.forEach(function (item) {
//   console.log(item);
// });

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

const socialObjs = [
  { name: 'Akshit' },
  { age: 26 },
  { address: 'India' }
]

socialObjs.forEach((item) => console.log(item));