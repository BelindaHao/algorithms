function sumZero(arr: Array<number>): [number, number] | null {
    for(let i = 0, j = arr.length-1; i < arr.length ;) {
        if(arr[i] + arr[j] > 0){
            j--;
        }else if (arr[i] + arr[j] <0){
            i++;
        } else {
            return [arr[i], arr[j]];
        }
    }
    return null;
}

module.exports = { sumZero }