function carFactory(obj) {
    obj.engine = engine();


    if(obj.carriage === "hatchback") {
            delete obj.carriage;
            obj.carriage = { type: 'hatchback', color: obj.color};
    } else if(obj.carriage === "coupe"){
            delete obj.carriage;
            obj.carriage = { type: 'coupe', color: obj.color};
    }

    if(+obj.wheelsize % 2 === 0) {
       obj.wheelsize -= 1;
    }

    obj.wheels = [obj.wheelsize,obj.wheelsize, obj.wheelsize, obj.wheelsize];

    delete obj.color;
    delete obj.wheelsize;
    delete obj.power;

    console.log(obj);
    return obj;

    function engine() {
        let power = obj.power;
        if(power <= 90) {
            return { power: 90, volume: 1800 }
        } else if(power <= 120) {
            return { power: 120, volume: 2400 }
        } else {
            return { power: 200, volume: 3500 }
        }
    }
}
carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }

);