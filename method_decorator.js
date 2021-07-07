var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AddUserHook(message) {
    return function (_, // don't use target
    __, // don't use propertyKey
    descriptor) {
        console.log(message);
        var original = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Do something before addUser...");
            original.apply(this, args);
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
        AddUserHook("Applying AddUserHook...")
    ], UserComponent.prototype, "addUser");
    return UserComponent;
}());
var users = new UserComponent();
users.addUser("John");
console.log(users.users);
