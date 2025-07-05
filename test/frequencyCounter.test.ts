const { areSame } = require("../src/pattern/frequencyCounter")

describe("frequencyCounter pattern - areSame", () => {
    const orignalArray = [4, 21, 19, 55, 21, 6];
    const sameArray = [4, 6, 21, 19, 55, 21];
    const differentValuesArray = [2, 42, 28, 8, 2, 2];
    const differenctLengthArray = [4, 21, 19, 55];
    const sameValuesDifferenctCounts = [4, 21, 19, 55, 21, 21];

    it("returns true for arrays with same elements in different order", () => {
        expect(areSame(orignalArray, sameArray)).toBe(true);
    });

    it("returns false for arrays with different values", () => {
       expect(areSame(orignalArray, differentValuesArray)).toBe(false);
    });

    it("returns false for arrays of different lengths", () => {
        expect(areSame(orignalArray, differenctLengthArray)).toBe(false);
    });

    it("returns false when element counts differ", () => {
        expect(areSame(orignalArray, sameValuesDifferenctCounts)).toBe(false);
    })

    it("return true for empty arrays", () => {
        expect(areSame([], [])).toBe(true);
    })
});

export {};