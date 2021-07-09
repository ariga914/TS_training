function Logger(msg: string) {
    return function(target: Function) {
        console.log(msg);
        console.log(target);
    }
}

function Tagging(target: any) {
    console.log("Another decorator");
}

@Logger("Your message here")
class HumanBeing {
    name = "John";

    constructor() {
        console.log("Calling HumanBeing Constructor");
    }
}

const a = new HumanBeing();

//When excute above code, you will see the result like below:
//Calling decorator...
//class Person {
//    constructor() {
//       this.name = "John";
//        console.log("Calling Person constructor");
//    }
//} 
//Calling Person constructor
