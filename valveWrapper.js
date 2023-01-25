const raspi = require('raspi');
const gpio = require('raspi-gpio');

class Valve{
    constructor(pin){
        this.pinCode = pin

        raspi.init(()=>{
            this.pin = new gpio.DigitalOutput(pin);
            console.log("Valve initialized")
        })
    }

    open(){
        this.pin.write(gpio.HIGH)
    }

    close(){
        this.pin.write(gpio.LOW)
    }
    get state(){
        return this.pin.value
    }
}

module.exports = {
    Valve: Valve
}