// Procedural

var width = 10;
var height = 20;

function calculateArea(width, height) {
  return width * height;
}
function calculateRange(width, height) {
  return 2 * (width + height);
}
var area = calculateArea(width, height);
var range = calculateRange(width, height);
console.log(area);
console.log(range);
//Object Oriented
var rect = {
  width: 10,
  height: 20,

  calculateArea: function () {
    return this.width * this.height;
  },
  calculateRange: function () {
    return 2 * (this.width + this.height);
  },
};
var area = rect.calculateArea();
var rang = rect.calculateRange();
console.log(area);
console.log(rang);

var obj = {
  asd: 12,
  fgh: 13,
};
function changeMe(obj) {
  obj.asd = obj.asd + 100;

  obj.fgh = obj.fgh + 100;
  console.log(obj);
}

changeMe(obj);
console.log(obj); 
