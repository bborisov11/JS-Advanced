function crew(obj) {
    if(obj.handsShaking === true) {
        obj.bloodAlcoholLevel += 0.1 * +obj.weight * +obj.experience;
        obj.handsShaking = false;
    }
    return obj;
}
crew({ weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false }

);