class Bike {
    price: number;
    max_speed: number;
    miles: number;
    constructor(price: number, max_speed: number) {
        this.price = price; 
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo() {
        console.log(`Price: ${this.price}, Max speed: ${this.max_speed}, and the total miles on your bike: ${this.miles} `);
        return this;
    }
    ride() {
        this.miles += 10;
        console.log("Riding");
        return this;
    }
    reverse() {
        if (this.miles == 0) {
            console.log("Cannot reverse anymore!");
            return this;
        }
        else {
            console.log("Reversing");
            this.miles -= 5;
            return this;
        }
    }

}

const red = new Bike(500, 120);
const blue = new Bike(375, 90);
const green = new Bike(150, 70);

red.ride().ride().ride().reverse().displayInfo();
blue.ride().ride().reverse().reverse().displayInfo();
green.reverse().reverse().reverse().displayInfo();