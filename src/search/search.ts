function binarySearch<T>(arr: Array<T>, item: T) : number {
    let lowIndex = 0, highIndex = arr.length -1;

    while(lowIndex <= highIndex){
        let midIndex = Math.floor((highIndex + lowIndex)/2);
        if(arr[midIndex] == item) {
            return midIndex;
        } else if (item > arr[midIndex]) {
            lowIndex = midIndex+1;
        } else {
            highIndex = midIndex-1;
        }
    }

    return -1
}

module.exports = { binarySearch }