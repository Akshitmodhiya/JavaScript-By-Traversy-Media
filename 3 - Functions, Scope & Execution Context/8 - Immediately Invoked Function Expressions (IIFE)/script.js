(function () {
  const user = 'Modhiya';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

(function (name) {
  console.log('Hello ' + name);
})('John');

(function hello() {
  console.log("Hello");
})();