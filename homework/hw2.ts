interface Shape {
    width: number;
    calculArea(): number;
}

class Square implements Shape {
    width: number;

    constructor(width: number) {
        this.width = width;
    }

    calculArea(): number {
        return this.width * this.width;
    }
}

class Rectangle extends Square {
    height: number;

    constructor(width: number, height: number) {
        super(width);
        this.height = height;
    }

    calculArea(): number {
        return this.height * this.width;
    }
}

const square1 = new Square(2);
const square2 = new Square(4);

const rectangle1 = new Rectangle(3, 2);
const rectangle2 = new Rectangle(5, 1);
const rectangle3 = new Rectangle(4, 6);

const shapeArray: Array<Shape> = [square1, rectangle1, square2, rectangle2, rectangle3];

let result: number[] = [];

for (let i: number = 0; i <shapeArray.length; i++) {
        result.push(shapeArray[i].calculArea());
}

console.log(result);