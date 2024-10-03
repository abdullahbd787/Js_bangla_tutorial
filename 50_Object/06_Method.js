var obj = {
  a: 40,
  b: 60,
  z: 75,
};
console.log(obj);

obj.a = 69;
console.log(obj);

var obj2 = obj;
obj2.a = 85;
obj2.b = 77;
console.log(obj2);

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

var obj3 = Object.assign({}, obj);
obj3.a = 555;
console.log(obj);
console.log(obj3);
