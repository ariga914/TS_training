"use strict";
class Dog {
    constructor(name, weigh) {
        this.name = name;
        this.weigh = weigh;
    }
    say() {
        console.log(`The dog named ${this.name} goes woof woof`);
    }
    getWeigh() {
        return this.weigh;
    }
}
let myDOg;
myDOg = new Dog("Shiba", 5);
myDOg.say();
console.log(myDOg.getWeigh());
