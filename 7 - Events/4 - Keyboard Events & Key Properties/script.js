const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};

const onKeyUp = (e) => {
  console.log('keyup');
};

const onKeyDown = (e) => {
  // console.log('keydown');

  // key
  // if (e.key === 'Enter') {
  //   alert('You pressed enter');
  // };

  // keycode
  // https://www.toptal.com/developers/keycode/table
  if (e.keyCode === 13) {
    alert('You pressed enter');
  }

  // code
  if (e.code === 'Numpad1') {
    console.log('You pressed 1');
  }

  if (e.repeat) {
    console.log('You are holding down ' + e.key);
  }

  console.log('Shift: ' + e.shiftKey);
  console.log('Control: ' + e.ctrlKey);
  console.log('ALt: ' + e.altKey);

  if (e.shiftKey && e.key === 'K') {
    console.log('You hit shift + K');
  }

};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);