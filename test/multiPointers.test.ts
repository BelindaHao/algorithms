const { sumZero } =  require('../src/pattern/multiPointers')

describe("multiPointers pattern - sumZero", () => {
    const sortedArray = [-10, -6, 0, 1, 2, 5, 6, 8];

    it("returns first series that sum up to zero", () => {
        expect(sumZero(sortedArray)).toStrictEqual([-6, 6]);
    });
});

export {}