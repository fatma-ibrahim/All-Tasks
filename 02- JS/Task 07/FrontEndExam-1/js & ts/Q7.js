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
// Define the base class Animal
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.setValue = function (name, age) {
        this.name = name;
        this.age = age;
    };
    return Animal;
}());
var Zebra = /** @class */ (function (_super) {
    __extends(Zebra, _super);
    function Zebra(name, age) {
        return _super.call(this, name, age) || this;
    }
    Zebra.prototype.printInfo = function () {
        console.log("I am a Zebra named ".concat(this.name, ", ").concat(this.age, " years old. \nI am from the African savanna."));
    };
    return Zebra;
}(Animal));
var Dolphin = /** @class */ (function (_super) {
    __extends(Dolphin, _super);
    function Dolphin(name, age) {
        return _super.call(this, name, age) || this;
    }
    Dolphin.prototype.printInfo = function () {
        console.log("I am a Dolphin named ".concat(this.name, ", ").concat(this.age, " years old. \nI live in the ocean."));
    };
    return Dolphin;
}(Animal));
var zebra = new Zebra("Stripes", 5);
zebra.printInfo();
var dolphin = new Dolphin("Flipper", 3);
dolphin.printInfo();
