const d = new Date(2022, 2, 10, 13, 0, 0);
const month = d.getMonth();
const hour = d.getHours();


switch (month) {
  case 1:
    console.log('It is Jan');
    break;
  case 2:
    console.log('It is Feb');
    break;
  case 3:
    console.log('It is Mar');
    break;
  case 4:
    console.log('It is Apr');
    break;
  default:
    console.log('It is not Jan, feb, Mar or Apr');
}


switch (true) {
  case hour < 12:
    console.log('Good Morning');
    break;
  case hour < 18:
    console.log('Good Afternoon');
    break;
  default:
    console.log('Good Evening');
}