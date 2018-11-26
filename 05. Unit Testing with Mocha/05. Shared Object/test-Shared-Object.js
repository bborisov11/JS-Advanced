let assert = require("chai").assert;
let sharedObject = require("./05. Shared Object");

//let jsdom = require('jsdom-global')();
//let $ = require("jquery");

describe("check sharedObject", function () {
    describe("change name", function () {
        it("with an empty string, should do nothing", function () {
            sharedObject.changeName('');
            assert.equal(sharedObject.name, null);
        });
    });
    describe("change income",function () {
        it("with negative number, no changes should be made", function () {
            assert.equal(sharedObject.changeIncome(-1),null);
        });
        it("with string no changes should be made", function () {
            assert.equal(sharedObject.changeIncome("asd"), null);
        });
        it("new income should change previous one", function () {
            sharedObject.changeIncome(5);
            assert.equal(sharedObject.income, 5);
        });
        it("new income should be passed to html text field", function () {
            sharedObject.changeIncome(5);
            assert.equal($('#income').val(), 5);
        })
    })
});