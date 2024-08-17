var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shap = /** @class */ (function () {
    function Shap(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    Object.defineProperty(Shap.prototype, "Color", {
        get: function () {
            return this.color;
        },
        set: function (color) {
            this.color = color;
        },
        enumerable: false,
        configurable: true
    });
    Shap.prototype.isFilled = function () {
        return this.filled;
    };
    Object.defineProperty(Shap.prototype, "Filled", {
        set: function (filled) {
            this.filled = filled;
        },
        enumerable: false,
        configurable: true
    });
    Shap.prototype.toString = function () {
        return "Shape[color=".concat(this.color, ", filled=").concat(this.filled, "]");
    };
    return Shap;
}());
var shap = new Shap("Red", true);
console.log(shap.toString());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius, color, filled) {
        var _this = _super.call(this, color, filled) || this;
        _this.radius = radius;
        return _this;
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
        return "Circle [".concat(_super.prototype.toString.call(this), ", radius=").concat(this.radius, "]");
    };
    return Circle;
}(Shap));
var cir = new Circle(1.0, "Red", true);
cir.Radius = 4;
cir.Color = "Green";
console.log(cir.toString());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length, color, filled) {
        var _this = _super.call(this, color, filled) || this;
        _this.length = length;
        _this.width = width;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "Width", {
        get: function () {
            return this.width;
        },
        set: function (width) {
            this.width = width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "Lenght", {
        get: function () {
            return this.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "Length", {
        set: function (length) {
            this.length = length;
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
        return "Rectangle [".concat(_super.prototype.toString.call(this), ", width=").concat(this.width, ", length=").concat(this.length, "]");
    };
    return Rectangle;
}(Shap));
var rect = new Rectangle(5, 6, "Black", true);
rect.Length = 8;
rect.Width = 4;
console.log(rect.toString());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side, color, filled) {
        return _super.call(this, side, side, color, filled) || this;
    }
    Object.defineProperty(Square.prototype, "Side", {
        get: function () {
            return this.Width;
        },
        set: function (side) {
            this.Width = side;
            this.Length = side;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Square.prototype, "Width", {
        set: function (side) {
            _super.prototype.Width = side;
            _super.prototype.Length = side;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Square.prototype, "Length", {
        set: function (side) {
            _super.prototype.Width = side;
            _super.prototype.Length = side;
        },
        enumerable: false,
        configurable: true
    });
    Square.prototype.toString = function () {
        return "Square [".concat(_super.prototype.toString.call(this), "]");
    };
    return Square;
}(Rectangle));
var sq = new Square(5, "Black", true);
sq.Side = 4;
console.log(sq.toString());
