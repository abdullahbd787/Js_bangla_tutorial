var arr = [4, 2, 1, 5, 8, 7, 9, 6, 3, 9];

// var filteredArr = arr.filter(function (value) {
//   return value > 4;
// });
// console.log(filteredArr);

function myFilter(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  myFilter(arr, function (value) {
    return value % 2 === 1;
  })
);
console.log(
  myFilter(arr, function (value) {
    return value > 4;
  })
);
