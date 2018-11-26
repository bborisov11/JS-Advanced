function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
let assert = require("chai").assert;

describe("isOddOrEven(string) tests", function () {
    it("input should be undefined", function () {
        let expectedOutput = "undefined";
        let actualOutput = typeof isOddOrEven(13);

        assert.equal(actualOutput, expectedOutput);
    });
    it("input should be odd", function () {
        let expectedOutput = "odd";
        let actualOutput = isOddOrEven("tests");

        assert.equal(actualOutput, expectedOutput);
    });
    it("input should be even", function () {
        let expectedOutput = "even";
        let actualOutput = isOddOrEven("test");

        assert.equal(actualOutput, expectedOutput);
    });
});