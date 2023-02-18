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

module.exports = { bubbleSort, selectionSort }