// Q1
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    Object.defineProperty(Circle.prototype, "Radius", {
        get: function () {
            return this.radius;
        },
        set: function (radius) {
            this.radius = radius;
        },
        enumerable: false,
        configurable: true
    });
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.getCircumference = function () {
        return 2 * this.radius * Math.PI;
    };
    Circle.prototype.toString = function () {
        return "Circle Radius = ".concat(this.radius, " \nCircle Area = ").concat(this.getArea(), " \nCircle Circumference = ").concat(this.getCircumference());
    };
    return Circle;
}());
var cir = new Circle("Red", 1.0);
cir.Radius = 4;
console.log(cir.toString());
// Q2
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Object.defineProperty(Rectangle.prototype, "Length", {
        set: function (length) {
            this.length = length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "Width", {
        set: function (width) {
            this.width = width;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.getArea = function () {
        return this.length * this.width;
    };
    Rectangle.prototype.getPerimeter = function () {
        return (this.length + this.width) * 2;
    };
    Rectangle.prototype.toString = function () {
        return "Length : ".concat(this.length, " \nWidth : ").concat(this.width, " \nArea : ").concat(this.getArea(), " \nPerimeter : ").concat(this.getPerimeter());
    };
    return Rectangle;
}());
var rect = new Rectangle(5, 6);
rect.Length = 8;
rect.Width = 4;
console.log(rect.toString());
// Q3
var Employee = /** @class */ (function () {
    function Employee(id, firstName, lastName, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    Object.defineProperty(Employee.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "FirstName", {
        get: function () {
            return this.firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "LastName", {
        get: function () {
            return this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "Name", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "Salary", {
        get: function () {
            return this.salary;
        },
        set: function (salary) {
            this.salary = salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "AnnualSalary", {
        get: function () {
            return this.salary * 12;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.raiseSalary = function (percent) {
        this.salary += this.salary * (percent / 100);
        return this.salary;
    };
    Employee.prototype.toString = function () {
        return "ID: ".concat(this.id, " \nFirst Name: ").concat(this.firstName, " \nLast Name: ").concat(this.lastName, " \nName is: ").concat(this.Name, " \nSalary: ").concat(this.salary);
    };
    return Employee;
}());
var emp = new Employee(1, "John", "Doe", 5000);
console.log(emp.toString());
emp.raiseSalary(10);
console.log("New Salary after raise: ".concat(emp.Salary));
console.log("Annual Salary: ".concat(emp.AnnualSalary));
// Q4
var InvoiceItem = /** @class */ (function () {
    function InvoiceItem(id, desc, qty, unitPrice) {
        this.id = id;
        this.desc = desc;
        this.qty = qty;
        this.unitPrice = unitPrice;
    }
    Object.defineProperty(InvoiceItem.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InvoiceItem.prototype, "Desc", {
        get: function () {
            return this.desc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InvoiceItem.prototype, "Qty", {
        get: function () {
            return this.qty;
        },
        set: function (qty) {
            this.qty = qty;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InvoiceItem.prototype, "UnitPrice", {
        get: function () {
            return this.unitPrice;
        },
        set: function (unitPrice) {
            this.unitPrice = unitPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InvoiceItem.prototype, "Total", {
        get: function () {
            return this.unitPrice * this.qty;
        },
        enumerable: false,
        configurable: true
    });
    InvoiceItem.prototype.toString = function () {
        return "ID: ".concat(this.id, " \ndesc: ").concat(this.desc, " \nqty: ").concat(this.qty, " \nunitPrice: ").concat(this.unitPrice.toFixed(2));
    };
    return InvoiceItem;
}());
var item = new InvoiceItem("123", "Laptop", 2, 1500.5);
console.log(item.toString());
// Q5
var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        if (balance === void 0) { balance = 0; }
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    Object.defineProperty(Account.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "Balance", {
        get: function () {
            return this.balance;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.credit = function (amount) {
        this.balance += amount;
        return this.balance;
    };
    Account.prototype.debit = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Amount exceeded balance");
        }
        return this.balance;
    };
    Account.prototype.transferTo = function (another, amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            another.credit(amount);
        }
        else {
            console.log("Amount exceeded balance");
        }
        return this.balance;
    };
    Account.prototype.toString = function () {
        return "ID: ".concat(this.id, " \nName: ").concat(this.name, " \nBalance: ").concat(this.balance);
    };
    return Account;
}());
var acc1 = new Account("A101", "Alice", 500);
var acc2 = new Account("A102", "Bob", 500);
console.log(acc1.toString());
console.log(acc2.toString());
// Add an amount to the balance
acc1.credit(200);
console.log("Updated Balance of acc1: ".concat(acc1.Balance));
// Deduct an amount from the balance
acc1.debit(100);
console.log("Updated Balance of acc1: ".concat(acc1.Balance));
// Transferring an amount from one account to another
acc1.transferTo(acc2, 150);
console.log("Updated Balance of acc1: ".concat(acc1.Balance));
console.log("Updated Balance of acc2: ".concat(acc2.Balance));
// Q6
var Time = /** @class */ (function () {
    function Time(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    Object.defineProperty(Time.prototype, "Hour", {
        get: function () {
            return this.hour;
        },
        set: function (hour) {
            this.hour = hour;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "Minute", {
        get: function () {
            return this.minute;
        },
        set: function (minute) {
            this.minute = minute;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "Second", {
        get: function () {
            return this.second;
        },
        set: function (second) {
            this.second = second;
        },
        enumerable: false,
        configurable: true
    });
    Time.prototype.setTime = function (hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    };
    Time.prototype.toString = function () {
        // return `${this.hour}:${this.minute}:${this.second}`;
        return "".concat(this.hour.toString().padStart(2, "0"), ":").concat(this.minute
            .toString()
            .padStart(2, "0"), ":").concat(this.second.toString().padStart(2, "0"));
    };
    Time.prototype.nextSecond = function () {
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
    };
    Time.prototype.previousSecond = function () {
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
    };
    return Time;
}());
var time = new Time(23, 59, 59);
console.log(time.toString()); // "23:59:59"
time.nextSecond();
console.log(time.toString()); // "00:00:00"
time.previousSecond();
console.log(time.toString()); // "23:59:59"
// Q7
var Ball = /** @class */ (function () {
    function Ball(x, y, radius, xDelta, yDelta) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.xDelta = xDelta;
        this.yDelta = yDelta;
    }
    Object.defineProperty(Ball.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (x) {
            this.x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "Y", {
        get: function () {
            return this.y;
        },
        set: function (y) {
            this.y = y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "Radius", {
        get: function () {
            return this.radius;
        },
        set: function (radius) {
            this.radius = radius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "XDelta", {
        get: function () {
            return this.xDelta;
        },
        set: function (xDelta) {
            this.xDelta = xDelta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "YDelta", {
        get: function () {
            return this.yDelta;
        },
        set: function (yDelta) {
            this.yDelta = yDelta;
        },
        enumerable: false,
        configurable: true
    });
    Ball.prototype.move = function () {
        this.x += this.xDelta;
        this.y += this.yDelta;
    };
    Ball.prototype.reflectHorizontal = function () {
        this.xDelta = -this.xDelta;
    };
    Ball.prototype.reflectVertical = function () {
        this.yDelta = -this.yDelta;
    };
    Ball.prototype.toString = function () {
        return "Ball: (".concat(this.x, ", ").concat(this.y, "), speed: (").concat(this.xDelta, ",").concat(this.yDelta, ") ");
    };
    return Ball;
}());
var ball = new Ball(1, 2, 10, 3, 4);
console.log(ball.toString());
ball.move();
console.log(ball.toString());
ball.reflectHorizontal();
console.log(ball.toString());
ball.reflectVertical();
console.log(ball.toString());
// Q8
var Author = /** @class */ (function () {
    function Author(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
    Object.defineProperty(Author.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Author.prototype, "Email", {
        get: function () {
            return this.email;
        },
        set: function (email) {
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Author.prototype, "Gender", {
        get: function () {
            return this.gender;
        },
        enumerable: false,
        configurable: true
    });
    Author.prototype.toString = function () {
        return "name: ".concat(this.name, " \nemail: ").concat(this.email, " \ngender: ").concat(this.gender);
    };
    return Author;
}());
var author = new Author("John Doe", "john.doe@example.com", "m");
console.log(author.toString());
author.Email = "john.newemail@example.com";
console.log(author.toString());
