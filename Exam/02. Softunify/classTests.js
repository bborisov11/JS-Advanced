let SoftUniFy = require("./app");
let assert = require("chai").assert;
//{ pesho: { rate: 0, votes: 0, songs: [ 'gosho - asdfg' ] } }
describe("tests for SoftuniFy class",function () {
    let softuni;
    beforeEach(function () {
         softuni = new SoftUniFy();
    });
    describe("constructor should work properly", function () {
        it("constructor should contain all songs property as empty object", function () {
            assert.deepEqual(softuni.allSongs, {});
        })
    });
    describe("check functionality of downloadSong() function", function () {
        it("should return an empty object", function () {
            console.log(softuni.downloadSong("Pesho", "Pe", "asd"));
            console.log(SoftUniFy);
            let a = softuni.downloadSong("Pesho", "Pe", "asd");
            console.log(a);
          assert.equal(softuni.downloadSong("Pesho", "Pe", "asd"), "[Function: SoftUniFy]");
        })
    })

});