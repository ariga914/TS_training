function countStrElements(arr: string | number[]): number {
    let counter: number = 0;

    for (let i: number = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === "string") {
            counter++;
        }
    }
    return counter;
}

const input1: any = [1, "h", 2, "k", "Hello"];
const input2: any = [1, 5, 4, 2];
const input3: any = ["2", "hello", "b", "c"];

console.log(countStrElements(input1));
console.log(countStrElements(input2));
console.log(countStrElements(input3));