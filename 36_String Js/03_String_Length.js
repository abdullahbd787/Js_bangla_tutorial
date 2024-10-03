// var str = "Some String";
// console.log(str.charAt(3));

var str = "Abdullah";
var str2 = "Abdullah Al-Mamun";
var length = 0;
while (true) {
  if (str.charAt(length) == "") {
    break;
  } else {
    length++;
  }
}
console.log(length);
console.log(str2.length);
