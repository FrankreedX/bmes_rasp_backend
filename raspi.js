const raspi = require('raspi');
const pwm = require('raspi-soft-pwm');

let motor1Pin

raspi.init(() => {
    motor1Pin = new pwm.SoftPWM('GPIO22');
    console.log("raspi initialized")
})

module.exports = {
    motor1Pin
}