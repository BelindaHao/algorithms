const sortFunc = require("../src/sort/sort")

describe("test sort algorithms", () => {
    let arr:Array<number> = [4, 21, 19, 55, 21, 6];

    it("should bubble sort number array", () => {
        sortFunc.bubbleSort(arr);
        expect(arr).toEqual([4, 6, 19, 21, 21, 55]);
    });

    arr = [4, 21, 19, 55, 21, 6];
    it("should selection sort number array", () => {
        sortFunc.selectionSort(arr);
        expect(arr).toEqual([4, 6, 19, 21, 21, 55]);
    });
});

export {};

