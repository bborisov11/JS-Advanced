let SubscriptionCard = require("./subscriptionCard");
let assert = require("chai").assert;

describe("test SubscriptionCard",function () {
    let subscription;
    beforeEach(function () {
        subscription = new SubscriptionCard("Pesho","Petrov","0000");
    });
   describe("constructor should work properly",function () {
       it("should work instantiated with three parameters",function () {
           assert.equal(subscription.firstName,"Pesho");
           assert.equal(subscription.lastName,"Petrov");
           assert.equal(subscription.SSN,"0000");
       })
   });
   describe("accessors should work properly", function () {
      it("firstName should return correct value",function () {
          assert.equal(subscription.firstName,subscription._firstName);
      });
       it("lastName should return correct value",function () {
           assert.equal(subscription.lastName,subscription._lastName);
       });
       it("SSN should return correct value",function () {
           assert.equal(subscription.SSN,subscription._SSN);
       });
       it("isBlocked should return true",function () {
           subscription.block();
          assert.equal(subscription.isBlocked, true);
       });
       it("isBlocked should return false", function () {
           subscription.unblock();
           assert.equal(subscription.isBlocked, false);
       });

   });
   describe("check functionality of addSubscription()",function () {
       it("should add entry into subscription with start and end date",function () {
           subscription.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
           subscription.addSubscription('121', new Date('2018-04-23'), new Date('2018-05-22'));
           assert.equal(subscription._subscriptions.length, 2);
       });
   });
   describe("check functionality of isValid() function",function () {
       it("should return false if it is blocked",function () {
           subscription.block();
           assert.equal(subscription.isValid('120', new Date('2018-04-22')), false);
       });
        it("with wrong line should return false", function () {
            subscription.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.equal(subscription.isValid("10", new Date('2018-04-22')), false);
        });
        it("with line equal to * and proper date should work correctly", function () {
            subscription.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.equal(subscription.isValid("*", new Date('2018-05-21')), true)
        });
        it("with line equal to * and wrong date should work correctly", function () {
            subscription.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.equal(subscription.isValid("*", new Date('2018-05-22')), false)
        });
       it("with correct line and correct date should work correctly", function () {
           subscription.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
           assert.equal(subscription.isValid("120", new Date('2018-04-22')), true)
       });
       it("with correct line and wrong date should work correctly", function () {
           subscription.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
           assert.equal(subscription.isValid("120", new Date('2018-04-21')), false)
       });
       it("with many elements should work correctly", function () {
           subscription.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
           subscription.addSubscription('130', new Date('2018-04-22'), new Date('2018-05-21'));
           assert.equal(subscription.isValid("120", new Date('2018-04-22')), true)
       });
   })
});