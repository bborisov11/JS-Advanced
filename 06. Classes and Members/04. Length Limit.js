class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
        this.firstString = string;
    }
    increase(length) {
        if (this.innerLength + length < this.innerString.length) {
            this.innerString = this.innerString.slice(0, this.innerLength + length);
            this.innerLength+= length;
        } else {
            this.innerString = this.firstString;
            this.innerLength += length;
        }
    }
    decrease(length) {
        if(this.innerLength - length < 0) {
            this.innerLength = 0;
            this.innerString = "";
        } else {
           this.innerString = this.innerString.slice(0, this.innerLength - length);
            this.innerLength -= length;
        }
    }
    toString() {
        if(this.innerString !== this.firstString) {
            return this.innerString + "...";
        }
        return this.innerString;
    }
}
let test = new Stringer("Viktor", 6);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
