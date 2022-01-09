//this includes the vehicle class as a module
const VehicleModule = require("./vehicle");

class Car extends Vehicle {
    constructor(make, model, year, color, mileage){
        super (make, model, year, color, mileage);
        this.maximumPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.maxFuel = 100;
        this.scheduleMaintenance = false;
    }

    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) {
                this.passenger += num;
                return this.passenger;
            } else {
                console.log(this.model + " does not have space for all passenger.");
            }
        } else {
            console.log("sorry, we're at capacity.");
        }
    }

    unloadPassenger(num) {
        if (num <= this.passenger){
            console.log("passengers unloaded..");
            this.passenger -= num;
            return this.passenger;
        } else {
            console.log("There aren't that many passengers..");
        }
    }

    start() {
        if (this.fuel < 0){
            console.log("engine started!!");
            return this.started = true;
        } else {
            console.log("no fuel.");
            return this.started = false;
        }
    }

    stop() {
        this.started = false
    }

    fillFuel(num) {
        if ((num + this.fuel) < this.maxfuel) {
            this.fuel += num;
            return this.fuel;
        } else {
            console.log(`The tank can only take ${this.maxFuel - this.fuel} more fuel.`)
        }
    }


    scheduleService(mileage) {
        if (mileage < 30000){
            console.log("Time for a service!");
            return this.scheduleMaintenance = true;
        } else {
            console.log("Not ready for service.");
            return this.scheduleMaintenance = false;
        }
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)