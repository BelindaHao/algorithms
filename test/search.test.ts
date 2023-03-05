const sarchFunc = require("../src/search/search")

describe("test search algorithms", () => {
    let arr:Array<number> = [4, 6, 19, 21, 21, 55];

    it("should return the index of array", () => {
        let index = sarchFunc.binarySearch(arr, 19);
        expect(index).toEqual(2);
    });

    
    it("should return -1 if not found", () => {
        let index = sarchFunc.binarySearch(arr, 20);
        expect(index).toEqual(-1);
    });
});

export {};
