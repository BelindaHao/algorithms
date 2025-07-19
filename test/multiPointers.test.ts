const { sumZero } =  require('../src/pattern/multiPointers')

describe("multiPointers pattern - sumZero", () => {
   ;

    it("returns first series that sum up to zero", () => {
        expect(sumZero([-10, -6, 0, 1, 2, 5, 6, 8])).toStrictEqual([-6, 6]);
    });

    it("returns null when no pair sum up to zero", () => {
        expect(sumZero([-10, -8, -1, 0, 2, 6, 16])).toBe(null);
    });
});

export {}