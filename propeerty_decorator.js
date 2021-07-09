var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("PROPERTY DECORATOR");
function id() {
    return function (target, name) {
        var value;
        //The getter returns the value of the property itself.
        var getter = function () {
            return value;
        };
        //setter creates a random string and assign to the property value.
        var setter = function () {
            value = Math.random().toString(36).substr(2, 9);
        };
        //check defineProperty
        Object.defineProperty(target, name, {
            get: getter,
            set: setter
        });
        console.log(target);
        console.log(name);
    };
}
;
var manKind = /** @class */ (function () {
    function manKind() {
        this._personID = '';
    }
    manKind.prototype.show = function () {
        console.log(this._personID);
    };
    __decorate([
        id()
    ], manKind.prototype, "_personID");
    return manKind;
}());
var firstniki = new manKind();
firstniki.show();
var secondniki = new manKind();
secondniki.show();
console.log(typeof (firstniki._personID));
