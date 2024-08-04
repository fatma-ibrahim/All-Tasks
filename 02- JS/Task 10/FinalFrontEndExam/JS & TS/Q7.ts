abstract class Shape {
  origin: Point;

  constructor(origin: Point) {
    this.origin = origin;
  }

  // Abstract methods to be implemented by subclasses
  abstract move(): void;
  abstract resize(): void;
  abstract display(): void;

  // A common method that could be shared by all shapes
  get ID(): number {
    return Math.floor(Math.random() * 10000);
  }
}

// Define the Point class used for position
class Point {
  constructor(public x: number, public y: number) {}
}

class Rectangle extends Shape {
  corner: Point;

  constructor(origin: Point, corner: Point) {
    super(origin);
    this.corner = corner;
  }

  move(): void {
    console.log("Rectangle is moved.");
  }

  resize(): void {
    console.log("Rectangle is resized.");
  }

  display(): void {
    console.log("Displaying Rectangle.");
  }
}

class Circle extends Shape {
  constructor(origin: Point) {
    super(origin);
  }

  move(): void {
    console.log("Circle is moved.");
  }

  resize(): void {
    console.log("Circle is resized.");
  }

  display(): void {
    console.log("Displaying Circle.");
  }
}

class Polygon extends Shape {
  points: Point[];

  constructor(origin: Point, points: Point[]) {
    super(origin);
    this.points = points;
  }

  move(): void {
    console.log("Polygon is moved.");
  }

  resize(): void {
    console.log("Polygon is resized.");
  }

  display(): void {
    console.log("Displaying Polygon.");
  }
}

const originPoint = new Point(0, 0);
const rectangleCorner = new Point(10, 10);

// Create a Rectangle instance
const rectangle = new Rectangle(originPoint, rectangleCorner);
rectangle.move();
rectangle.resize();
rectangle.display();
console.log("Rectangle ID:", rectangle.ID);

// Create a Circle instance
const circle = new Circle(originPoint);
circle.move();
circle.resize();
circle.display();
console.log("Circle ID:", circle.ID);

// Create a Polygon instance
const polygon = new Polygon(originPoint, [
  new Point(1, 2),
  new Point(3, 4),
  new Point(5, 6),
]);
polygon.move();
polygon.resize();
polygon.display();
console.log("Polygon ID:", polygon.ID);
