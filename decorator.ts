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
@Tagging
class HumanBeing {
    name = "John";

    constructor() {
        console.log("Calling HumanBeing Constructor");
    }
}

const a = new HumanBeing();


