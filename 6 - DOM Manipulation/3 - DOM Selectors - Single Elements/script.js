// document.getElementById()
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));


// Set Attributes
// document.getElementById('app-title').id = 'new-id';
document.getElementById('app-title').title = 'Shopping-List';
document.getElementById('app-title').setAttribute = ('class', 'title');

const title = document.getElementById('app-title');
console.log(title);


// Get/Change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello World';
title.innerHTML = '<strong>Shopping List</strong>';

// Change Styles
title.style.color = 'Green';
title.style.backgroundColor = 'Black';
title.style.padding = '10px';
title.style.borderRadius = '50%';


// document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'Blue';

// Use these methods on other elements
const list = document.querySelector('ul');
console.log(list);

const firstItem = list.querySelector('li');
firstItem.style.color = 'Grey';