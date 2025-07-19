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

module.exports = { sumZero }