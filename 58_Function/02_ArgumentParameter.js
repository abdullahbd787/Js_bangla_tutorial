function anik(a, b) {
  a + b;
  console.log(a + b);
  console.log(a * b);
  console.log(a / b);
}
anik(8, 2);            
anik(9, 2);
anik(10, 2);

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6, 10];
var arr3 = [7, 8, 9, 11, 12];

var sum1 = 0;
for (var i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
}
console.log(sum1);

var sum2 = 0;
for (var i = 0; i < arr2.length; i++) {
  sum2 += arr2[i];
}
console.log(sum2);

function sumOfArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
sumOfArray(arr1);
sumOfArray(arr2);
sumOfArray(arr3);
