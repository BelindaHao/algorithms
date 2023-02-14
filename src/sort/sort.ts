function bubbleSort<T>(arr:Array<T>): void {
    for(let i=0; i<arr.length-1; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] > arr[j]){
                [arr[j], arr[i]] = [arr[i], arr[j]];
            }
        }
    }
}

function selectionSort<T>(arr:Array<T>): void {
    let selectedIndex:number;

    for(let i=0; i<arr.length-1; i++) {
        selectedIndex = i;
        
        for(let j=i+1; j<arr.length; j++) {
            if(arr[selectedIndex] > arr[j]) {
                selectedIndex = j;
            }
        }

        [arr[i], arr[selectedIndex]] = [arr[selectedIndex], arr[i]];

    }
}

module.exports = { bubbleSort, selectionSort }