function argumentInfo() {

    let summary = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ": " + obj);
        if(!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }
    Object.keys(summary).sort((a, b) => summary[b] - summary[a])
        .forEach(x => console.log(x + " = " + summary[x]));
}
//argumentInfo('cat', 42, function () { console.log('Hello world!'); });
argumentInfo({ name: 'bob'}, 3.333, 9.999);