const sortFunc = require("./sort/sort");
const a = require("./pattern/frequenceCounter");

let numberArr: Array<number> = [4, 21, 19, 55, 21, 6];
let stringArr: String[] = ['H1', 'h6', 'H2', 'h8'];

sortFunc.bubbleSort(numberArr);
sortFunc.bubbleSort(stringArr);

sortFunc.selectionSort(numberArr);
sortFunc.selectionSort(stringArr);

console.log(`bubble    sort ${numberArr} to be     ${sortFunc.bubbleSort(numberArr)}`);
console.log(`selection sort ${numberArr} to be     ${sortFunc.selectionSort(numberArr)}`);

console.log(`bubble    sort ${stringArr} to be  ${sortFunc.bubbleSort(stringArr)}`);
console.log(`selection sort ${stringArr} to be  ${sortFunc.selectionSort(stringArr)}`);

// legacy web platform API for encoding/decoding
console.log(btoa("Encode base64"));
console.log(atob("RW5jb2RlIGJhc2U2NA=="));


let arr1: Array<number> = [4, 21, 19, 55, 21, 6];
let arr2: Array<number> = [55, 21, 7, 4, 21, 19];
console.log(a.areSame(arr1, arr2));

