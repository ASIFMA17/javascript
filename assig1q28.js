class Car {
    name;
    milage;
    max_speed;
    constructor(name, milage, max_speed) {


        this.name = name;
        this.milage = milage;
        this.max_speed = max_speed;
    }

}

const myobj = new Car("porsche 911", 9.0, 191);

console.log(myobj);