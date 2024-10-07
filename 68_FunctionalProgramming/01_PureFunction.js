// What is pure function?
//It returns the same result if given the same arguments
//It does not cause any observable side effects

// this is a pure function
function sqr(n) {
  return n * n;
}
console.log(sqr(3));
console.log(sqr(3));
console.log(sqr(3));

var n = 10;
// those are not pure function
function change() {
  n = 100;
}
change();
console.log(n);

var point = {
  x: 45,
  y: 30,
};

function printPoint(point) {
  point.x = 100;
  point.y = 200;
  console.log(point);
}
printPoint(point);

console.log(point);
