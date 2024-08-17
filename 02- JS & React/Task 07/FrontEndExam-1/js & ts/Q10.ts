class Shap {
  private color: string;
  private filled: boolean;

  constructor(color: string, filled: boolean) {
    this.color = color;
    this.filled = filled;
  }

  get Color(): string {
    return this.color;
  }

  set Color(color: string) {
    this.color = color;
  }

  isFilled(): boolean {
    return this.filled;
  }

  set Filled(filled: boolean) {
    this.filled = filled;
  }

  public toString(): string {
    return `Shape[color=${this.color}, filled=${this.filled}]`;
  }
}

const shap = new Shap("Red", true);
console.log(shap.toString());

class Circle extends Shap {
  private radius: number;

  constructor(radius: number, color: string, filled: boolean) {
    super(color, filled);
    this.radius = radius;
  }

  get Radius(): number {
    return this.radius;
  }

  set Radius(radius: number) {
    this.radius = radius;
  }

  public getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  public getCircumference(): number {
    return 2 * this.radius * Math.PI;
  }

  public toString(): string {
    return `Circle [${super.toString()}, radius=${this.radius}]`;
  }
}
const cir = new Circle(1.0, "Red", true);
cir.Radius = 4;
cir.Color = "Green";
console.log(cir.toString());

class Rectangle extends Shap {
  private length: number;
  private width: number;

  constructor(width: number, length: number, color: string, filled: boolean) {
    super(color, filled);
    this.length = length;
    this.width = width;
  }

  get Width(): number {
    return this.width;
  }

  set Width(width: number) {
    this.width = width;
  }

  get Lenght(): number {
    return this.length;
  }

  set Length(length: number) {
    this.length = length;
  }

  public getArea(): number {
    return this.length * this.width;
  }

  public getPerimeter(): number {
    return (this.length + this.width) * 2;
  }

  public toString(): string {
    return `Rectangle [${super.toString()}, width=${this.width}, length=${
      this.length
    }]`;
  }
}

const rect = new Rectangle(5, 6, "Black", true);
rect.Length = 8;
rect.Width = 4;
console.log(rect.toString());

class Square extends Rectangle {
  constructor(side: number, color: string, filled: boolean) {
    super(side, side, color, filled);
  }

  get Side(): number {
    return this.Width;
  }

  set Side(side: number) {
    this.Width = side;
    this.Length = side;
  }

  set Width(side: number) {
    super.Width = side;
    super.Length = side;
  }

  set Length(side: number) {
    super.Width = side;
    super.Length = side;
  }

  public toString(): string {
    return `Square [${super.toString()}]`;
  }
}

const sq = new Square(5, "Black", true);
sq.Side = 4;
console.log(sq.toString());