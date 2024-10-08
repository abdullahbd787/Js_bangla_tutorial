function add(a, b) {
  return a * b; // 12
}

function manipulate(a, b, fn) {
  var c = a + b; // 7
  var d = a - b; // -1

  return function () {
    var m = fn(a, b);
    return c * d * m;  // 7*(-1)*7
  };
}
var multiply = manipulate(3, 4, add);
console.log(multiply());
