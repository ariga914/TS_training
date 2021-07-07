function merge(a, b) {
    return Object.assign(a, b);
}
var mergeObj = merge({ name: "Joe" }, { age: 20 });
console.log(mergeObj.name);
console.log(mergeObj.age);
console.log("OASIS NO ANGER");
