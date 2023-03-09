const sortFunc = require("../src/sort/sort")

describe("test sort algorithms", () => {
    let arr:Array<number> = [4, 21, 19, 55, 21, 6];

    it("should bubble sort number array", () => {
        let sortedArr = sortFunc.bubbleSort(arr);
        expect(sortedArr).toEqual([4, 6, 19, 21, 21, 55]);
    });

    it("should selection sort number array", () => {
        let sortedArr = sortFunc.selectionSort(arr);
        expect(sortedArr).toEqual([4, 6, 19, 21, 21, 55]);
    });

    it("should insert sort number array", () => {
        let sortedArr = sortFunc.insertionSort(arr);
        expect(sortedArr).toEqual([4, 6, 19, 21, 21, 55]);
    });

    it("should quick sort number array", () => {
        let sortedArr = sortFunc.quickSort(arr);
        expect(sortedArr).toEqual([4, 6, 19, 21, 21, 55]);
    });
});

export {};
