var sortFunc = require("./sort/sort");
var numberArr = [4, 19, 21, 55, 21, 6];
var stringArr = ['H1', 'H2', 'h6', 'h8'];
sortFunc.bubbleSort(numberArr);
sortFunc.bubbleSort(stringArr);
console.log(numberArr);
console.log(stringArr);
