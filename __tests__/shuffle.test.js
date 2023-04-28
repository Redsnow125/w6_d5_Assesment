const shuffle = require("../src/shuffle");
const testArr = [1,2,3];

describe("shuffle should...", () => {
  // CODE HERE
  test('Type should be arr', () => {
    expect(typeof shuffle(testArr)).toBe([])
  })
  test('Length should be 3', () => {
    expect( shuffle(testArr).length).toBe(3)
  })

});
