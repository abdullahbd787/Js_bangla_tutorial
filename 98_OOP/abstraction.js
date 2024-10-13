class Shape {
  constructor(color) {
    this.color = color;
  }

  getArea() {
    throw new Error("getArea method must be implemented.");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle("red", 5);
console.log(circle.getArea()); // 78.53981633974483
