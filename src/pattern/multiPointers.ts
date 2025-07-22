import { count } from "console";

function sumZero(arr: number[]): [number, number] | null {
    if ( arr.length === 0 ) return null;

    let left = 0;
    let right = arr.length -1;

    while(left < right) {
        const sum = arr[left] + arr[right];

        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }

    return null;
}

function countUniqueValues(arr: number[]): number {
    if( arr.length === 0 ) return 0;
   
    let uniqueIndex = 0;

    for(let i=1; i< arr.length; i++) {
        if(arr[uniqueIndex] !== arr[i]) {
            uniqueIndex++;
            arr[uniqueIndex] = arr[i];
        }
    }
    
    return uniqueIndex+1;
}


module.exports = { sumZero, countUniqueValues }