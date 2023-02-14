let sortFunc = require("./sort/sort");

let numberArr: Array<number> = [4,  19, 21, 55, 21, 6];
let stringArr: String[] = ['H1', 'H2', 'h6', 'h8'];
sortFunc.bubbleSort(numberArr);
sortFunc.bubbleSort(stringArr);

sortFunc.selectionSort(numberArr);
sortFunc.selectionSort(stringArr);

console.log(numberArr);
console.log(stringArr);