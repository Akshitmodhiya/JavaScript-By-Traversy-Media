const div = document.createElement('div');
div.className = 'container';
div.id = 'my-element';
div.setAttribute('title', 'my element');
// div.innerText = 'Hello World';

const text = document.createTextNode('Hello World'); // This is better technique

div.appendChild(text);

// document.body.appendChild(div);

document.querySelector('ul').appendChild(div);

console.log(div);