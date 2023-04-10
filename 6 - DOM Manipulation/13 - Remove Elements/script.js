function removeClearBtn() {
  document.querySelector('#clear').remove();
}

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  ul.removeChild(li);
}


// Method 1
function removeItem(itemNum) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNum})`);

  ul.removeChild(li);
}


// Method 2
function removeItem2(itemNum) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNum];

  ul.removeChild(li);
}


// Method 3
function removeItem3(itemNum) {
  const li = document.querySelector('li');
  li[itemNum - 1].remove();
}


// Method 4
const removeItem4 = (itemNum) => document.querySelectorAll('li')[itemNum - 1].remove();


removeClearBtn();
// removeFirstItem();
// removeItem(1);
// removeItem2(2);
// removeItem3(3);
removeItem4(4);