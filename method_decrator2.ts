function AddUserHook(message: string) {
    return function (
        _: Object, // don't use target
        __: string | symbol, // don't use propertyKey
        descriptor: TypedPropertyDescriptor<any>
    ) {
        console.log(message);
        const original = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log("Do something before addUser...");
            original.apply(this, args);
            console.log("Do something after addUser...");
        };

        return <any> descriptor;
    };
}

class UserComponent {
    users: any[] = [];

    @AddUserHook("Applying AddUserHook...")
    addUser(name: string) {
        console.log("Executing func addUser...");
        this.users.push({ name: name });
    }

}

const users = new UserComponent();
users.addUser("John");
console.log(users.users);

//Output:
//Applying AddUserHook...
//Do something before addUser...
//Executing func addUser...
//Do something after addUser...
//[{name: "John"}]
