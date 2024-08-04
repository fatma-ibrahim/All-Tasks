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
var Shape = /** @class */ (function () {
    function Shape(origin) {
        this.origin = origin;
    }
    Object.defineProperty(Shape.prototype, "ID", {
        // A common method that could be shared by all shapes
        get: function () {
            return Math.floor(Math.random() * 10000);
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}());
// Define the Point class used for position
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(origin, corner) {
        var _this = _super.call(this, origin) || this;
        _this.corner = corner;
        return _this;
    }
    Rectangle.prototype.move = function () {
        console.log("Rectangle is moved.");
    };
    Rectangle.prototype.resize = function () {
        console.log("Rectangle is resized.");
    };
    Rectangle.prototype.display = function () {
        console.log("Displaying Rectangle.");
    };
    return Rectangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(origin) {
        return _super.call(this, origin) || this;
    }
    Circle.prototype.move = function () {
        console.log("Circle is moved.");
    };
    Circle.prototype.resize = function () {
        console.log("Circle is resized.");
    };
    Circle.prototype.display = function () {
        console.log("Displaying Circle.");
    };
    return Circle;
}(Shape));
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(origin, points) {
        var _this = _super.call(this, origin) || this;
        _this.points = points;
        return _this;
    }
    Polygon.prototype.move = function () {
        console.log("Polygon is moved.");
    };
    Polygon.prototype.resize = function () {
        console.log("Polygon is resized.");
    };
    Polygon.prototype.display = function () {
        console.log("Displaying Polygon.");
    };
    return Polygon;
}(Shape));
var originPoint = new Point(0, 0);
var rectangleCorner = new Point(10, 10);
// Create a Rectangle instance
var rectangle = new Rectangle(originPoint, rectangleCorner);
rectangle.move();
rectangle.resize();
rectangle.display();
console.log("Rectangle ID:", rectangle.ID);
// Create a Circle instance
var circle = new Circle(originPoint);
circle.move();
circle.resize();
circle.display();
console.log("Circle ID:", circle.ID);
// Create a Polygon instance
var polygon = new Polygon(originPoint, [
    new Point(1, 2),
    new Point(3, 4),
    new Point(5, 6),
]);
polygon.move();
polygon.resize();
polygon.display();
console.log("Polygon ID:", polygon.ID);
