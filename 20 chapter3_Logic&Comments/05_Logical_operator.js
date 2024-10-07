// && and, || or, ! not. this is logical operator

// condition && condition. only true is true.
//true && true = true
//true && false = false
//false && true = false
//false && false = false

var a = 10;
var b = 20;
var c = 30;
var d = 40;
if (a > b && c > d) {
  console.log("A is greater than B and C greater than D");
} else {
  console.log("One condition is false"); //printed this statement cz one conditon are false
}

// conditon || condition
// true || true = true
// true || false = true
// false || true = true
// false || false = false

if (a > b || c > d) {
  console.log("A is greater than B Or C greater than D"); //printed this statement cz only one condition are true
} else {
  console.log("At least one conditon is false");
}

var a = 5;
var b = 5;
var check = !!(a > b);
console.log({ check: check });
