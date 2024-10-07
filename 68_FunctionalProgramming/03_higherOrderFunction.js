function add(a, b) {
  return a + b; // 7
}

function manipulate(a, b, add) {
  var c = a + b; // 7
  var d = a - b; // -1

  // function multiply() {
  //   var m = func(a, b);
  //   return c * d * m; // 7*(-1)*7
  // }

  return function () {
    var m = add(a, b);
    return c * d * m; // 7*(-1)*7
  };
}

var multiply = manipulate(3, 4, add);
console.log(multiply());
