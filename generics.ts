function outputArray<T>(a: T[]) {
    return console.log(...a);
}

//Only accept string array
outputArray<string>(["A", "B", "C"]); //OK
//Only accept number array
outputArray<number>([1, 2, 3]); //OK
//Accept mixing nuber and string array
outputArray<number | string>([1, 2, "Hello"]); //OK

type Student = {
    id: number;
    name: string;
    avgPoint: number;
};

type Employee = {
    id: string;
    name: string;
    salary: number;
};

class UserList<T> {
    users: T[] = [];

    addUser(user: T) {
        this.users.push(user);
    }

    showUsers() {
        console.log(this.users);
    }
}

//Use the class for Student type
const s1: Student = { id: 1, name: "John", avgPoint: 7 };
const s2: Student = { id: 2, name: "Ivy", avgPoint: 9 };

let studentList = new UserList<Student>();
studentList.addUser(s1);
studentList.addUser(s2);
studentList.showUsers();

//Use the class for Employee type
const e1: Employee = { id: "1232", name: "Bruce", salary: 4000 };
const e2: Employee = { id: "456", name: "Victor", salary: 5000 };

let employeesList = new UserList<Employee>();
employeesList.addUser(e1);
employeesList.addUser(e2);
employeesList.showUsers();
