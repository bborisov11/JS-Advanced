let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
let assert = require("chai").assert;

describe("checking object mathEnforcer first property add five", function () {
   it("should return undefined if parameter is not a number",function () {
       assert.equal(mathEnforcer.addFive("asd"),undefined);
   });
    it("should return correct result added with 5", function () {
        assert.equal(mathEnforcer.addFive(5),10);
    });
    it("should work correctly with floating point numbers", function () {
        assert.closeTo(mathEnforcer.addFive(0.1),5.1,0.01);
    });
    it("should return correct result added with negative values", function () {
        assert.equal(mathEnforcer.addFive(-5),0);
    });
    it("should return correct result added with positive values", function () {
        assert.equal(mathEnforcer.addFive(5),10);
    });
});
describe("checking object mathEnforcer second property subtractTen", function () {
  it("should return undefined if parameter is not a number", function () {
      assert.equal(mathEnforcer.subtractTen("asd"),undefined);
  });
    it("subtracting ten should return correct result", function () {
        assert.equal(mathEnforcer.subtractTen(15),15-10);
    });
    it("subtracting ten from negative number should return correct result", function () {
        assert.equal(mathEnforcer.subtractTen(-10),-20);
    });
    it("should work correctly with floating point numbers", function () {
        assert.closeTo(mathEnforcer.subtractTen(10.1),0.1,0.01);
    });
});
describe("checking object mathEnforcer second property sum", function () {
   it("if first parameter is not a number should return undefined",function () {
      assert.equal(mathEnforcer.sum("test", 5),undefined);
   });
    it("if second number is not a number should return undefined",function () {
        assert.equal(mathEnforcer.sum(5, "test"),undefined);
    });

    it("should return the sum of the two numbers", function () {
        assert.equal(mathEnforcer.sum(5, 5), 10);
    });
    it("should return the sum of the two negative numbers", function () {
        assert.equal(mathEnforcer.sum(-5, -5), -10);
    });
    it("should work correctly with floating point numbers", function () {
        assert.closeTo(mathEnforcer.sum(7.4111,1.211),8.62,0.01);
    });
});