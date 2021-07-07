class StudentEx {
    readonly name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    showInfo():void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const student = new StudentEx("John", 20);
student.showInfo();

class Person extends StudentEx {
    private studentId: number;

    constructor(name: string, age: number, studentId: number) {
        super(name, age);
        this.studentId = studentId;
    }

    showInfo():void {
        console.log(`ID: ${this.studentId}, Name: ${this.name}, Age: ${this.age}`);
    }
}

const student2 = new Person("John", 20, 1);
student2.showInfo();

abstract class Human {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public showName() {
        console.log(this.name);
    }

    abstract isExcellent(): boolean;
}

class  Adolecsence extends Human {
    point: number;
    
    constructor(name: string, age: number, point: number) {
        super(name, age);
        this.point = point;
    }

    isExcellent() :boolean {
        return this.point >8;
    }
}

class  EmployeeEx extends Human {
    completetedTasks: number;
    
    constructor(name: string, age: number, completedTaskes: number) {
        super(name, age);
        this.completetedTasks = completedTaskes;
    }

    isExcellent() :boolean {
        return this.completetedTasks > 50;
    }
}

const student3 = new Adolecsence("Johnson", 20, 9);
student3.showName();
console.log(student3.isExcellent());

const employee = new EmployeeEx("Josh", 20, 9);
employee.showName();
console.log(employee.isExcellent());