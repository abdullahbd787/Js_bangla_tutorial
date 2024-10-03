// for (var i = 1; i <= 20; i++) {
//   console.log(i);
// }

// for (var i = 1; i <= 20; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

var sum = 0;
for (var i = 1; i <= 10; i++) {
  console.log(sum + "+" + i + "=" + (sum + i));
  sum += i;
}
console.log("result = " + sum);
