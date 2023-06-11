class Shape {
  constructor(sides = []) {
    this.sides = sides;
  }

  perimeter = () => this.sides.reduce((sum, side) => sum + side, 0);

  area() {
    return 0; // Default implementation for the area of a generic shape
  }
}

class Rectangle extends Shape {
  constructor(length = 0, width = 0) {
    super([length, width, length, width]);
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

class Triangle extends Shape {
  constructor(sideA = 0, sideB = 0, sideC = 0) {
    super([sideA, sideB, sideC]);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  area() {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
  }
}

const data = [[3, 4], [5, 5], [3, 4, 5], [10], []];

for (const sides of data) {
  let shape = null;

  switch (sides.length) {
    case 2:
      shape = new Rectangle(...sides);
      break;
    case 3:
      shape = new Triangle(...sides);
      break;
    default:
      shape = new Shape(sides);
  }

  const shapeName = shape instanceof Rectangle ? 'Rectangle' :
    shape instanceof Triangle ? 'Triangle' : 'Shape';
  const perimeter = shape.perimeter();
  const area = shape.area();

  console.log(`${shapeName} (${sides.toString()}): Perimeter = ${perimeter}, Area = ${area}`);
}