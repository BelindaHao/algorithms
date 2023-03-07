function bubbleSort<T>(arr:Array<T>): Array<T> {
    let sortingArray = [...arr];
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

    return sortingArray;

    function partition<T>(arr:Array<T>, lowIndex:number, highIndex:number) : number {
        let pivot = Math.floor((lowIndex + highIndex)/2);
        let pivotValue = arr[pivot];

        while(lowIndex <= highIndex) {
            while(pivotValue > arr[lowIndex]) {
                lowIndex++;
            }

            while(pivotValue <= arr[highIndex]) {
                highIndex--;

            }
            
            if(lowIndex <= highIndex) {
                [arr[highIndex], arr[lowIndex]] = [arr[lowIndex], arr[highIndex]];
                lowIndex++;
                highIndex--;
            }
        }
        return lowIndex;
    }
    
}


module.exports = { bubbleSort, selectionSort, insertionSort }