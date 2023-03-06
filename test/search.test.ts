const searchFunc = require("../src/search/search")

describe("test search algorithms for numbers", () => {
    let arr:Array<number> = [4, 6, 19, 21, 21, 55];

    it("should return the index of array", () => {
        let index = searchFunc.binarySearch(arr, 19);
        expect(index).toEqual(2);
    });

    
    it("should return -1 if not found", () => {
        let index = searchFunc.binarySearch(arr, 20);
        expect(index).toEqual(-1);
    });
});

describe("test search algorithms for strings", () => {
    let arr:Array<string> = ["AB","Ab","aa","ab"];

    it("sshould return index of array", () => {
        let index = searchFunc.binarySearch(arr, "AB");
        expect(index).toEqual(0);
    });
});

export {};
