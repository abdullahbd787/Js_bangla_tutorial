function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
var result = addAll(1, 2, 3);
console.log(result);

function persone(name, email) {
  return {
    name: name,
    email: email,
  };
  console.log("I will never be show");
}
var p1 = persone("Abdullah Al-Mamun", "Abdullah@gmail.com");
console.log(p1);  
