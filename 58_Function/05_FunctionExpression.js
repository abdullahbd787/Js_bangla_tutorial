var addition = function (a, b) {
  return a + b;
}; //function expression
console.log(addition(10, 40));
setTimeout(function () {
  console.log("I will call after 5 second");
}, 5000);

var another = addition;
console.log(another(6, 8));
