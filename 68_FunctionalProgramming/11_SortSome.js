var persons = [
  {
    name: "A",
    age: 24,
  },
  {
    name: "B",
    age: 19,
  },
  {
    name: "C",
    age: 26,
  },
  {
    name: "D",
    age: 21,
  },
];
var arr = [4, 8, 1, 6, 7, 9, -8, 0, -2, 4, 3, 5, 6, 8, 2, 1, 7, -4];

// arr.sort(); //only method can not working negetive values
// console.log(arr);

// persons.sort(); // can not sort object
// console.log(persons);

arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(arr);

persons.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(persons);

var arr1 = [4, 8, 1, 6, 7, 9, 0, 4, 3, 5, 6, 8, 2, 1, 7];

var result = arr1.every(function (value) {
  return value % 2 === 0; // at this arays all number are even
});
console.log(result);

var result1 = arr1.every(function (value) {
  return value >= 0; //at this aray haven't any even number that greater than zero
});
console.log(result1);

var res3 = arr1.some(function (value) {
  //There should be at least one single number
  return value % 2 === 1;
});
console.log(res3);

var res4 = arr1.some(function (value) {
  //There must be at least one negative number
  return value < 0;
});
console.log(res4);
