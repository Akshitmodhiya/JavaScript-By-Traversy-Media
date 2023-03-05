let x;

const person = {
  name: 'Akshit',
  age: 26,
  isStudent: true,
  address: {
    city: 'Dahod',
    state: 'Gujarat',
  },
  hobbies: ['music', 'sports'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

person.name = 'Axit';
person['isStudent'] = false;

delete person.age;

person.hasChildren = true;

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
}

person.greet();

const person2 = {
  'first name': 'Akshit',
  'last name': 'Modhiya',
}

x = person2['first name'];

console.log(x);