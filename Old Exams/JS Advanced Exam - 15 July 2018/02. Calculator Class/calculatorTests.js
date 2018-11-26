let Calculator = require("./calculator");
let assert = require("chai").assert;
let expect = require("chai").expect;

describe("Calculator class should work properly", function () {
    let calculator;
    beforeEach(function () {
        calculator = new Calculator();
    });
   // it("should create array when instantiate the class",function () {
   //     assert(calculator.toString(), "empty array");
   // });
    describe("method add should work properly",function () {
        it("length should increase when adding new elements", function () {
            calculator.add(5);
            calculator.add("Test");
            calculator.add(2.13);
            calculator.add(-13);
            assert.deepEqual(calculator.expenses, [5,"Test", 2.13, -13]);
           // assert(calculator.expenses.length, 4);

        });
    });

    describe("method divideNums should work properly", function () {
        it("should throw exception if there are no numbers in the array", function () {
            calculator.add("Test");
            assert.throws(() => calculator.divideNums(), "There are no numbers in the array!");
        });
        it("with value of zero should return message", function () {
            calculator.add({});
            calculator.add(-5);
            calculator.add(3.13);
            calculator.add(0);
            assert.equal(calculator.divideNums(), "Cannot divide by zero");
        });
        it("with one number", function () {
            calculator.add(-9.9);
           // assert.closeTo(calculator.divideNums(), -3.13, 0.01);
            expect(calculator.divideNums()).to.be.closeTo(-9.9, 0.01)
        });
        it("with correct values should return positive divided value",function () {
            calculator.add(10);
            calculator.add(2);
            assert.equal(calculator.divideNums(), 5);
        });
        it("with correct values should return negative divided value",function () {
            calculator.add(-10);
            calculator.add(2);
            assert.equal(calculator.divideNums(), -5);
        });
        it("with correct values should return floating-point divided value",function () {
            calculator.add({});
            calculator.add(-9.9);
            calculator.add(9);
            calculator.add(9.5);
            //assert.closeTo(calculator.divideNums(), -0.115, 0.01);
            expect(calculator.divideNums()).to.be.closeTo(-0.115, 0.01)
        });
       // it("with correct values should return array with one value", function () {
       //     calculator.add(10);
       //     calculator.add(2);
       //     calculator.divideNums();
       //     let expected = [5];
       //     assert.deepEqual(calculator.expenses, expected);
       // })
    });

    describe("method toString should work properly", function () {
        it("if array is empty should return proper message",function () {
            assert.equal(calculator.toString(),"empty array");
        });
        it("if array is not empty should return them joined",function () {
            calculator.add(4);
            calculator.add(5);
            calculator.add(6);
            assert.equal(calculator.toString(),'4 -> 5 -> 6');
        });
    });

    describe("method orderBy should work properly", function () {
        it("if array is empty should return proper message", function () {
            assert.equal(calculator.orderBy(),"empty");
        });
        it("if array contains strings should order them and join them by ,", function () {
            calculator.add(-2);
            calculator.add("asd");
            calculator.add(5.2);
            assert.equal(calculator.orderBy(), '-2, 5.2, asd')
        });
        it("if array does not contains strings should order them and join them by ,", function () {
            calculator.add(3);
            calculator.add(-1);
            calculator.add(5);
            assert.equal(calculator.orderBy(), '-1, 3, 5');
        })
    })
});