"use strict";
class StudentEx {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
const student = new StudentEx("John", 20);
student.showInfo();
class Person extends StudentEx {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    showInfo() {
        console.log(`ID: ${this.studentId}, Name: ${this.name}, Age: ${this.age}`);
    }
}
const student2 = new Person("John", 20, 1);
student2.showInfo();
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
}
class Adolecsence extends Human {
    constructor(name, age, point) {
        super(name, age);
        this.point = point;
    }
    isExcellent() {
        return this.point > 8;
    }
}
class EmployeeEx extends Human {
    constructor(name, age, completedTaskes) {
        super(name, age);
        this.completetedTasks = completedTaskes;
    }
    isExcellent() {
        return this.completetedTasks > 50;
    }
}
const student3 = new Adolecsence("Johnson", 20, 9);
student3.showName();
console.log(student3.isExcellent());
const employee = new EmployeeEx("Josh", 20, 9);
employee.showName();
console.log(employee.isExcellent());
