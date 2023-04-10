// querySelectorAll()

const listItems = document.querySelectorAll('.item');

console.log(listItems[2].innerText);

listItems[1].style.color = 'Violet';

// listItems.forEach((item, index) => {
//   item.style.color = 'lightgreen';

//   if (index === 1) {
//     item.remove();
//   }

//   if (index === 0) {
//     item.innerHTML = ` New Apples
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>`;
//   }
// });

const listItems2 = document.getElementsByClassName('item');
console.log(listItems2[3]);

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3);