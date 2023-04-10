// insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.querySelector('h1');
  h1.textContent = 'insertAdjacentElement';
  filter.insertAdjacentElement('beforebegin', h1);
}

// insertAdjacentText Example
function insertText() {
  const item = document.querySelector('li:first-child');

  item.insertAdjacentText('beforebegin', 'insertAdjacentText');
}


// insertAdjacentHTML Example
function insertHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
}


// insertBefore Example
function insertBeforeItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li');
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
}



insertElement();
insertText();
insertHTML();
insertBeforeItem();

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeened -->
</p>
<!-- afterend -->
*/


