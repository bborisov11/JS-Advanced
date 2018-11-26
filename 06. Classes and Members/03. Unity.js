class Rat  {
        constructor(name) {
            this.name = name;
            this.unitedRats = [];
        }
        unite(rat) {
            if(rat instanceof Rat) {
                this.unitedRats.push(rat);
            }
        }
        getRats() {
               return this.unitedRats;
        }
        toString(){
            let str = this.name;
            if(this.unitedRats.length > 0) {
                str += "\n";
                this.unitedRats.forEach(x => str += "##" + x.name + "\n");
            }
            return str;
        }
    }

    let test = new Rat("Pesho");
    console.log(test.toString()); //Pesho

    console.log(test.getRats()); //[]

    test.unite(new Rat("Gosho"));
    test.unite(new Rat("Sasho"));
    console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

    console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho


