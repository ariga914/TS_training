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
        Logger("Your message here")
    ], HumanBeing);
    return HumanBeing;
}());
//When excute above code, you will see the result like below:
//Calling decorator...
//class Person {
//    constructor() {
//       this.name = "John";
//        console.log("Calling Person constructor");
//    }
//} 
//Calling Person constructor
