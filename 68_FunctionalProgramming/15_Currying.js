// function add(a, b, c) {
//   return a + b + c;
// }
// add(2, 4, 6);

function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
var result = currying(5)(10)(15);
console.log(result);
