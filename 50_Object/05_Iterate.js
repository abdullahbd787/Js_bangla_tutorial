var obj = {
  a: 10,
  b: 15,
  c: 20,
};
console.log("x" in obj);
console.log("a" in obj);

for (var i in obj) {
  console.log(i);
  console.log(obj[i]);
  console.log(i + ":" + obj[i]);
}
