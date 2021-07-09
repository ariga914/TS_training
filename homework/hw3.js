var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function required(message) {
    return function (target, propertyKey) {
        var value;
        var getter = function () {
            return value;
        };
        var setter = function (naming) {
            if (naming.length === 0) {
                value = message;
            }
            else {
                value = naming;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
var Personality = /** @class */ (function () {
    function Personality(name) {
        this.name = name;
    }
    Personality.prototype.show = function () {
        console.log(this.name);
    };
    __decorate([
        required("Name is required!")
    ], Personality.prototype, "name");
    return Personality;
}());
var firstMan = new Personality("");
firstMan.show();
var secondMan = new Personality("Juan");
secondMan.show();
