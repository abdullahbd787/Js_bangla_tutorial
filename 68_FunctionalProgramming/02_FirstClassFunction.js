//First class function

function add(a, b) {
  return a + b;
}

//1. A function can be stored ina variable
var sum = add;
console.log(sum(4, 5));
console.log(typeof sum); 

// 2. A Function can be stored in an array
var arr = [];
arr.push(add);
console.log(arr);
console.log(arr[0](5, 3));

// 3. A Function can be Stored in an object
var obj = {
  sum: add,
};
console.log(obj);
console.log(obj.sum(7, 9));

// 4. We can create function as need
setTimeout(function () {
  console.log("I have created...");
}, 1000);

// 5. We can pass Function as an arguments

// 6. We can return Functions from Another Function
