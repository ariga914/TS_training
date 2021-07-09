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
var Square = /** @class */ (function () {
    function Square(width) {
        this.width = width;
    }
    Square.prototype.calculArea = function () {
        return this.width * this.width;
    };
    return Square;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this, width) || this;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculArea = function () {
        return this.height * this.width;
    };
    return Rectangle;
}(Square));
var square1 = new Square(2);
var square2 = new Square(4);
var rectangle1 = new Rectangle(3, 2);
var rectangle2 = new Rectangle(5, 1);
var rectangle3 = new Rectangle(4, 6);
var shapeArray = [square1, rectangle1, square2, rectangle2, rectangle3];
var result = [];
for (var i = 0; i < shapeArray.length; i++) {
    if (shapeArray[i] instanceof Square || shapeArray[i] instanceof Rectangle) {
        result.push(shapeArray[i].calculArea());
    }
    else {
        continue;
    }
}
console.log(result);
