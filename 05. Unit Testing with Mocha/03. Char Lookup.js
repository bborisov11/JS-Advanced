function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
let assert = require("chai").assert;

describe("lookupChar(string, index) method tests", function () {
   it("first parameter should be undefined if not string", function () {
        let expectedOutput = undefined;
        let actualOutput = lookupChar(15,3);

        assert.equal(actualOutput,expectedOutput);
   });
    it("second parameter should be undefined if not integer", function () {
        let expectedOutput = undefined;
        let actualOutput = lookupChar("asdf","asd");

        assert.equal(actualOutput,expectedOutput);
    });
    it("floating point number should return undefined", function () {
        let expectedOutput = undefined;
        let actualOutput = lookupChar("asdf",3.14);

        assert.equal(actualOutput, expectedOutput);
    });
    it("should be undefined if both are wrong", function () {
        let expectedOutput = undefined;
        let actualOutput = lookupChar(15,"asd");

        assert.equal(actualOutput,expectedOutput);
    });
    it("index should be bigger than 0", function () {
        let expectedOutput = "Incorrect index";
        let actualOutput = lookupChar("test",-1);

        assert.equal(actualOutput,expectedOutput);
    });
    it("index should not be equal or bigger than string's length", function () {
        let expectedOutput = "Incorrect index";
        let actualOutput = lookupChar("test",7);

        assert.equal(actualOutput,expectedOutput);
    });
    it("should return character at specified position", function () {
        let expectedOutput = "s";
        let actualOutput = lookupChar("test",2);

        assert.equal(actualOutput, expectedOutput);
    })
});
