class Request {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}
//let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
//console.log(myData);
//let obj = {};
//parentobj.prototype = obj.prototype;
//parentobj.call(obj);
function Human() {
    this.gender = "yes";
    this.ugly = "yep";

}
function Employee() {
    this.name = "pesho";
    this.age = 3;
}
Employee.prototype = Object.create(Human.prototype);
let pesho = new Human();
let asd = "";
console.log(Object.getPrototypeOf(pesho));


