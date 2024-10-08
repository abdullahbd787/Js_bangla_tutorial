function sample(a, b, callback) {
  var c = a + b; // c= 13
  var d = a - b; // d = -3
  var result = callback(c, d); // var sum = c + d;
  return result; // result = 10
}

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
var result = sample(5, 8, sum);
console.log(result);

var result2 = sample(5, 8, function (c, d) {
  return c - d;
});
console.log(result2);

var result3 = sample(5, 8, function (c, d) {
  return c * d;
});
console.log(result3);
