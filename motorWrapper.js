const raspi = require('raspi');
const pwm = require('raspi-soft-pwm');

class Motor{
    constructor(pin) {
        this.pinCode = pin
        this.speed = 0
        raspi.init(()=>{
            this.pin = new pwm.SoftPWM({pin: pin, frequency: 200});
            console.log("motor on pin", pin, "has been initialized")
        })
    }

    set Speed(speed){
        this.speed = speed
        this.pin.write(speed)
    }

    get Speed(){
        return this.speed
    }
}

module.exports={
    Motor: Motor
}