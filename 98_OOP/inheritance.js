function Shape() {}

Shape.prototype.common = function () {
  console.log("I am Common Method");
};

var shape = new Shape();

function Square(width) {
  this.width = width;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.draw = function () {
  console.log("Drawing");
};

function Circle(width) {
  this.width = width;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.draw = function () {
  console.log("Drawing");
};

var sqr = new Square(45);
var cir = new Circle(99);
