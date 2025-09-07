function bubbleSort<T>(arr:Array<T>, compareFn?: (a: T, b: T) => number): Array<T> {
    let sortingArray = [...arr];
    const cmp = compareFn || ((a: T, b: T) => (a > b ? 1 : a < b ? -1 : 0));    
    
    for(let i=0; i<sortingArray.length-1; i++) {
        for(let j=i+1; j<sortingArray.length; j++) {
            if(sortingArray[i] > sortingArray[j]){
                [sortingArray[j], sortingArray[i]] = [sortingArray[i], sortingArray[j]];
            }
        }
    }

    return sortingArray;
}

function selectionSort<T>(arr:Array<T>): Array<T> {
    let sortingArray = [...arr];
    let selectedIndex:number;

    for(let i:number=0; i<sortingArray.length-1; i++) {
        selectedIndex = i;
        
        for(let j=i+1; j<sortingArray.length; j++) {
            if(sortingArray[selectedIndex] > sortingArray[j]) {
                selectedIndex = j;
            }
        }

        if(i != selectedIndex) {

            [sortingArray[i], sortingArray[selectedIndex]] = [sortingArray[selectedIndex], sortingArray[i]];
        }

    }

    return sortingArray;
}

function insertionSort<T>(arr:Array<T>) : Array<T> {
    let sortingArray = [...arr];
    let i:number, j:number;

    for(i=1; i<sortingArray.length; i++) {
        let value = sortingArray[i];
        for(j=i-1; j>-1 && sortingArray[j]>value; j--) {
            sortingArray[j+1] = sortingArray[j];            
        }
        sortingArray[j+1] = value;
    }

    return sortingArray;
}

function quickSort<T>(arr:Array<T>) : Array<T> {
    let sortingArray = [...arr];

    quickSortHelp(sortingArray, 0, sortingArray.length-1);

    return sortingArray;

    function quickSortHelp<T>(arr:Array<T>, lowIndex:number, highIndex:number) {
        if(lowIndex >= highIndex) {
            return;
        }

        let index = partition(arr, lowIndex, highIndex);
        quickSortHelp(arr, lowIndex, index-1);
        quickSortHelp(arr, index+1, highIndex);
    }

    function partition<T>(arr:Array<T>, lowIndex:number, highIndex:number) : number {
        let pivot = arr[lowIndex];
        let pivotIndex = lowIndex;
        
        while(lowIndex < highIndex) {
            while(arr[lowIndex] <= pivot && lowIndex < highIndex) {
                lowIndex++;
            }

            while(arr[highIndex] >= pivot && lowIndex < highIndex) {
                highIndex--;
            } 

            if(lowIndex < highIndex) {
                [arr[lowIndex], arr[highIndex]] = [arr[highIndex], arr[lowIndex]];
            }
            else if(pivot > arr[lowIndex]) {
                [arr[pivotIndex], arr[lowIndex]] = [arr[lowIndex], arr[pivotIndex]];
                return lowIndex;
            }
            else {
                lowIndex--;
                [arr[pivotIndex], arr[lowIndex]] = [arr[lowIndex], arr[pivotIndex]];
                return lowIndex;
            }
            
        }

        return lowIndex;
    }
    
}

function mergeSort<T>(arr:Array<T>): Array<T> {
    if(arr.length <= 1) return arr;

    let midIndex = Math.floor(arr.length/2);
    let leftArray = mergeSort(arr.slice(0, midIndex));
    let rightArray = mergeSort(arr.slice(midIndex));
    return merge(leftArray, rightArray);
    

    function merge<T>(arr1: Array<T>, arr2: Array<T>): Array<T> {
        let result = new Array<T>();
        let i = 0, j = 0;

        while(i < arr1.length && j < arr2.length) {
            if( arr1[i] < arr2[j] ) {
                result.push(arr1[i]);
                i++;
            }
            else {
                result.push(arr2[j]);
                j++;
            }
        }

        while(i < arr1.length){
            result.push(arr1[i]);
            i++;
        }

        while(j < arr2. length) {
            result.push(arr2[j]);
            j++;
        }

        return result;
    }
}


export { bubbleSort, selectionSort, insertionSort, quickSort, mergeSort }