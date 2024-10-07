function Sum(a, b) {
  console.log(a + b);
}
Sum(5, 2);

function test() {
  // console.log(arguments);
  // console.log(typeof arguments);

  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
test(15, 16, 17);

function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
addAll(1, 2, 3);
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
