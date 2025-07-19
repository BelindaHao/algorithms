const { sumZero } =  require('../src/pattern/multiPointers')

describe("multiPointers pattern - sumZero", () => {
    it("should return the first pair of numbers that sum to zero", () => {
        expect(sumZero([-10, -6, 0, 1, 2, 5, 6, 8])).toStrictEqual([-6, 6]);
    });

    it("should return null when no pairs sum to zero", () => {
        expect(sumZero([-10, -8, -1, 0, 2, 6, 16])).toBe(null);
    });

    it("should return null for an empty array", () => {
        expect(sumZero([])).toBe(null);
    });

    it("should return null when all numbers are positive", () => {
        expect(sumZero([1, 2, 3, 4])).toBe(null);
    });

    it("should return null when all numbers are negative", () => {
        expect(sumZero([-4, -3, -2, -1])).toBe(null);
    });

    it("should return [0, 0] when zero appears twice in the array", () => {
        expect(sumZero([-3, -1, 0, 0, 2, 4])).toStrictEqual([0, 0]);
    });

    it("should return the first valid pair when multiple pairs sum to zero", () => {
        expect(sumZero([-4, -3, -2, 2, 3, 4])).toStrictEqual([-4, 4]);
    });
});

export {}