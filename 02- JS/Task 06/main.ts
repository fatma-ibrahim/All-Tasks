// Q1
class Circle {
  private color: string;
  private radius: number;

  constructor(color: string, radius: number) {
    this.color = color;
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }

  setRadius(radius: number) {
    this.radius = radius;
  }

  public getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  public getCircumference(): number {
    return 2 * this.radius * Math.PI;
  }

  public toString(): string {
    return `Circle Radius = ${
      this.radius
    } \nCircle Area = ${this.getArea()} \nCircle Circumference = ${this.getCircumference()}`;
  }
}

const cir = new Circle("Red", 1.0);
cir.setRadius(4);
console.log(cir.toString());

// Q2
class Rectangle {
  private length: number;
  private width: number;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  setLength(length: number) {
    this.length = length;
  }

  setWidth(width: number) {
    this.width = width;
  }

  public getArea(): number {
    return this.length * this.width;
  }

  public getPerimeter(): number {
    return (this.length + this.width) * 2;
  }

  public toString(): string {
    return `Length : ${this.length} \nWidth : ${
      this.width
    } \nArea : ${this.getArea()} \nPerimeter : ${this.getPerimeter()}`;
  }
}

const rect = new Rectangle(5, 6);
rect.setLength(8);
rect.setWidth(4);
console.log(rect.toString());

// Q3
class Employee {
  private id: number;
  private firstName: string;
  private lastName: string;
  private salary: number;

  constructor(id: number, firstName: string, lastName: string, salary: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  getId(): number {
    return this.id;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getSalary(): number {
    return this.salary;
  }

  setSalary(salary: number) {
    this.salary = salary;
  }

  getAnnualSalary(): number {
    return this.salary * 12;
  }

  raiseSalary(percent: number): number {
    this.salary += this.salary * (percent / 100);
    return this.salary;
  }

  public toString(): string {
    return `ID: ${this.id} \nFirst Name: ${this.firstName} \nLast Name: ${
      this.lastName
    } \nName is: ${this.getName()} \nSalary: ${this.salary}`;
  }
}

const emp = new Employee(1, "John", "Doe", 5000);
console.log(emp.toString());

emp.raiseSalary(10);
console.log(`New Salary after raise: ${emp.getSalary()}`);
console.log(`Annual Salary: ${emp.getAnnualSalary()}`);

// Q4
class InvoiceItem {
  private id: string;
  private desc: string;
  private qty: number;
  private unitPrice: number;

  constructor(id: string, desc: string, qty: number, unitPrice: number) {
    this.id = id;
    this.desc = desc;
    this.qty = qty;
    this.unitPrice = unitPrice;
  }

  getId(): string {
    return this.id;
  }

  getDesc(): string {
    return this.desc;
  }

  getQty(): number {
    return this.qty;
  }

  setQty(qty: number) {
    this.qty = qty;
  }

  getUnitPrice(): number {
    return this.unitPrice;
  }

  setUnitPrice(unitPrice: number) {
    this.unitPrice = unitPrice;
  }

  getTotal(): number {
    return this.unitPrice * this.qty;
  }

  public toString(): string {
    return `ID: ${this.id} \ndesc: ${this.desc} \nqty: ${
      this.qty
    } \nunitPrice: ${this.unitPrice.toFixed(2)}`;
  }
}

const item = new InvoiceItem("123", "Laptop", 2, 1500.5);
console.log(item.toString());

// Q5
class Account {
  private id: string;
  private name: string;
  private balance: number;

  constructor(id: string, name: string, balance: number = 0) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getBalance(): number {
    return this.balance;
  }

  credit(amount: number): number {
    this.balance += amount;
    return this.balance;
  }

  debit(amount: number): number {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Amount exceeded balance");
    }
    return this.balance;
  }

  transferTo(another: Account, amount: number): number {
    if (amount <= this.balance) {
      this.balance -= amount;
      another.credit(amount);
    } else {
      console.log("Amount exceeded balance");
    }
    return this.balance;
  }

  public toString(): string {
    return `ID: ${this.id} \nName: ${this.name} \nBalance: ${this.balance}`;
  }
}

const acc1 = new Account("A101", "Alice", 500);
const acc2 = new Account("A102", "Bob", 500);

console.log(acc1.toString());
console.log(acc2.toString());

// Add an amount to the balance
acc1.credit(200);
console.log(`Updated Balance of acc1: ${acc1.getBalance()}`);

// Deduct an amount from the balance
acc1.debit(100);
console.log(`Updated Balance of acc1: ${acc1.getBalance()}`);

// Transferring an amount from one account to another
acc1.transferTo(acc2, 150);
console.log(`Updated Balance of acc1: ${acc1.getBalance()}`);
console.log(`Updated Balance of acc2: ${acc2.getBalance()}`);

// Q6
class Time {
  private hour: number;
  private minute: number;
  private second: number;

  constructor(hour: number, minute: number, second: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  getHour(): number {
    return this.hour;
  }

  getMinute(): number {
    return this.minute;
  }

  getSecond(): number {
    return this.second;
  }

  setHour(hour: number) {
    this.hour = hour;
  }

  setMinute(minute: number) {
    this.minute = minute;
  }

  setSecond(second: number) {
    this.second = second;
  }

  setTime(hour: number, minute: number, second: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  toString(): string {
    // return `${this.hour}:${this.minute}:${this.second}`;
    return `${this.hour.toString().padStart(2, "0")}:${this.minute
      .toString()
      .padStart(2, "0")}:${this.second.toString().padStart(2, "0")}`;
  }

  nextSecond(): Time {
    this.second++;
    if (this.second >= 60) {
      this.second = 0;
      this.minute++;
      if (this.minute >= 60) {
        this.minute = 0;
        this.hour++;
        if (this.hour >= 24) {
          this.hour = 0;
        }
      }
    }
    return this;
  }

  previousSecond(): Time {
    this.second--;
    if (this.second < 0) {
      this.second = 59;
      this.minute--;
      if (this.minute < 0) {
        this.minute = 59;
        this.hour--;
        if (this.hour < 0) {
          this.hour = 23;
        }
      }
    }
    return this;
  }
}

const time = new Time(23, 59, 59);
console.log(time.toString()); // "23:59:59"

time.nextSecond();
console.log(time.toString()); // "00:00:00"

time.previousSecond();
console.log(time.toString()); // "23:59:59"

// Q7
class Ball {
  private x: number;
  private y: number;
  private radius: number;
  private xDelta: number;
  private yDelta: number;

  constructor(
    x: number,
    y: number,
    radius: number,
    xDelta: number,
    yDelta: number
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.xDelta = xDelta;
    this.yDelta = yDelta;
  }

  getX(): number {
    return this.x;
  }

  setX(x: number) {
    this.x = x;
  }

  getY(): number {
    return this.y;
  }

  setY(y: number) {
    this.y = y;
  }

  getRadius(): number {
    return this.radius;
  }

  setRadius(radius: number) {
    this.radius = radius;
  }

  getXDelta(): number {
    return this.xDelta;
  }

  setXDelta(xDelta: number) {
    this.xDelta = xDelta;
  }

  getYDelta(): number {
    return this.yDelta;
  }

  setYDelta(yDelta: number) {
    this.yDelta = yDelta;
  }

  move() {
    this.x += this.xDelta;
    this.y += this.yDelta;
  }

  reflectHorizontal() {
    this.xDelta = -this.xDelta;
  }

  reflectVertical() {
    this.yDelta = -this.yDelta;
  }

  toString(): string {
    return `Ball: (${this.x}, ${this.y}), speed: (${this.xDelta},${this.yDelta}) `;
  }
}

const ball = new Ball(1, 2, 10, 3, 4);
console.log(ball.toString());

ball.move();
console.log(ball.toString());

ball.reflectHorizontal();
console.log(ball.toString());

ball.reflectVertical();
console.log(ball.toString());

// Q8
class Author {
  private name: string;
  private email: string;
  private gender: "m" | "f";

  constructor(name: string, email: string, gender: "m" | "f") {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }

  getGender(): "m" | "f" {
    return this.gender;
  }

  toString(): string {
    return `name: ${this.name} \nemail: ${this.email} \ngender: ${this.gender}`;
  }
}

const author = new Author("John Doe", "john.doe@example.com", "m");
console.log(author.toString());

author.setEmail("john.newemail@example.com");
console.log(author.toString());
