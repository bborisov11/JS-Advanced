class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        if(room !== "livingRoom" && room !== "bedRoom" && room !== "closet") {
            let message = "Cannot have book shelf in " + room;
            throw new Error(message);
        }
        this.shelfGenre = shelfGenre;
        this.room = room;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
    }
    addBook(...data) {

        if(this.shelf.length === this.shelfCapacity) {
            this.shelf.shift();
        }
        if(data.length === 3) {
            let [bookName, bookAuthor, genre] = data;
            this.shelf.push({
                bookName,
                bookAuthor,
                genre
            });
        } else {
            let [bookName, bookAuthor] = data;
            this.shelf.push({
                bookName,
                bookAuthor
            });
        }
        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
        return this;
    }
    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter(x => x.bookName !== bookName);
    }
    showBooks(genre) {
        let result = 'Results for search ' + '"' + genre + '"' + ":" + "\n";
        this.shelf.filter(x => x.genre === genre)
            .forEach(x => result += "\uD83D\uDCD6 " + x.bookAuthor + " - " +
                '"' +  x.bookName + '"' +  "\n");
        return result;
    }
    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }
    toString() {
        let str = "";
        this.shelf.filter(x => x.bookName.indexOf(this.shelfGenre) > -1)
            .forEach(x => str += "\uD83D\uDCD6 " + '"' + x.bookName + '"' + " - " +
                 x.bookAuthor +  "\n");
        return this.shelf.length === 0 ? "It's an empty shelf" :
            '"' + this.shelfGenre + '"' + " shelf in " + this.room +" contains:" + "\n" + str;
    }
}
let livingRoom = new BookCollection("Programming", "livingRoom", 5);
console.log(livingRoom.toString());




