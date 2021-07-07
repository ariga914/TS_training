"use strict";
function outputArray(a) {
    return console.log(...a);
}
outputArray(["A", "B", "C"]);
outputArray([1, 2, 3]);
outputArray([1, 2, "Hello"]);
class UserList {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    showUsers() {
        console.log(this.users);
    }
}
const s1 = { id: 1, name: "John", avgPoint: 7 };
const s2 = { id: 2, name: "Ivy", avgPoint: 9 };
let studentList = new UserList();
studentList.addUser(s1);
studentList.addUser(s2);
studentList.showUsers();
const e1 = { id: "1232", name: "Bruce", salary: 4000 };
const e2 = { id: "456", name: "Victor", salary: 5000 };
let employeesList = new UserList();
employeesList.addUser(e1);
employeesList.addUser(e2);
employeesList.showUsers();
