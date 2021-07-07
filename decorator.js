var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(msg) {
    return function (target) {
        console.log(msg);
        console.log(target);
    };
}
function Tagging(target) {
    console.log("Another decorator");
}
var HumanBeing = /** @class */ (function () {
    function HumanBeing() {
        this.name = "John";
        console.log("Calling HumanBeing Constructor");
    }
    HumanBeing = __decorate([
        Logger("Your message here"),
        Tagging
    ], HumanBeing);
    return HumanBeing;
}());
var a = new HumanBeing();
console.log("METHOD DECORATOR");
function AddUerHook(message) {
    return function (_, //don't use the target
    __, //don't use the propertyKey
    descriptor) {
        console.log(message);
        var original = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log('Do something before addUser...');
            original.aspply(this, args);
            console.log("Do something after addUser...");
        };
        return descriptor;
    };
}
var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.users = [];
    }
    UserComponent.prototype.addUser = function (name) {
        console.log("Executing func addUser...");
        this.users.push({ name: name });
    };
    __decorate([
        AddUerHook("Applying AddUerHook...")
    ], UserComponent.prototype, "addUser");
    return UserComponent;
}());
var users = new UserComponent();
users.addUser("John");
console.log(users.users);
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
var firstPerosn = new manKind();
firstPerosn.show();
var secondPerson = new manKind();
secondPerson.show();
