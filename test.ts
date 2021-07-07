function merge<T extends object, U extends object>(a: T, b: U): T & U {
    return Object.assign(a, b);
}


const mergeObj = merge({name: "Joe"}, {age: 20});

console.log(mergeObj.name);
console.log(mergeObj.age);
console.log("OASIS NO ANGER");