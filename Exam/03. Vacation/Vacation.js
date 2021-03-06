class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (budget >= this.budget) {
            if (!this.kids[grade]) {
                this.kids[grade] = [];
                this.kids[grade].push(`${name} - ${budget}`);
                return this.kids[grade];
            } else {
                for (let i = 0; i < this.kids[grade].length; i++) {
                    let currentKid = this.kids[grade][i].split(" - ")[0];
                    if (currentKid === name) {
                        return `${name} is already in the list for this ${this.destination} vacation.`;
                    }
                }
                this.kids[grade].push(`${name} - ${budget}`);
                return this.kids[grade];
            }
        } else {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }
    }

    removeChild(name, grade) {
        let containsKid = false;
        let arr = Object.keys(this.kids);
        if (arr.includes(grade.toString())) {
            for (let i = 0; i < this.kids[grade].length; i++) {
                let currentKid = this.kids[grade][i].split(" - ")[0];
                if (currentKid === name) {
                    containsKid = true;
                }
            }
        } else {
            return `We couldn't find ${name} in ${grade} grade.`
        }
        if (containsKid) {
            this.kids[grade] = this.kids[grade].filter(x => x.split(" - ")[0] !== name);
            return this.kids[grade];
        } else {
            return `We couldn't find ${name} in ${grade} grade.`
        }
    }

    numberOfChildren() {
        let countOfChildren = 0;
        let keys = Object.keys(this.kids);
        for (let i = 0; i < keys.length; i++) {
            for (let j = 0; j < this.kids[keys[i]].length; j++) {
                countOfChildren++;
            }
        }
        return countOfChildren;
    }

    toString() {
        let result = "";
        if (this.numberOfChildren() === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        } else {
            result += `${this.organizer} will take ${this.numberOfChildren()} children on trip to ${this.destination}\n`;
            let sortedKeys = Object.keys(this.kids).sort(((a, b) => a - b));
            for (let i = 0; i < sortedKeys.length; i++) {
                    result += `Grade: ${sortedKeys[i]}\n`;
                for (let j = 0; j < this.kids[sortedKeys[i]].length; j++) {
                    result += `${j + 1}. ${this.kids[sortedKeys[i]][j]}\n`;
                }
                result += "\n";
            }
            return result;
        }
    }
}

let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);

vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500);

console.log(vacation.toString());


