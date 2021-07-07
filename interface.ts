interface Animal {
    name: string;
    weigh: number;
    say(): void;
    getWeigh(): number;
}

class Dog implements Animal{
    name: string;
    weigh: number;

    constructor(name: string, weigh: number) {
        this.name = name;
        this.weigh = weigh;
    } 

    say(): void {
        console.log(`The dog named ${this.name} goes woof woof`);
    }

    getWeigh(): number {
        return this.weigh;
    }
}

let myDOg: Animal;
myDOg = new Dog("Shiba", 5);
myDOg.say();
console.log(myDOg.getWeigh());
