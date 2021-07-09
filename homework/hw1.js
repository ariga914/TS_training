function countStrElements(arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === "string") {
            counter++;
        }
    }
    return counter;
}
var input1 = [1, "h", 2, "k", "Hello"];
var input2 = [1, 5, 4, 2];
var input3 = ["2", "hello", "b", "c"];
console.log(countStrElements(input1));
console.log(countStrElements(input2));
console.log(countStrElements(input3));
