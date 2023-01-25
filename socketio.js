const Server = require('socket.io')

let io

const raspi = require('raspi');
const pwm = require('raspi-soft-pwm');

let motor1Pin

raspi.init(() => {
    motor1Pin = new pwm.SoftPWM('GPIO21');
    console.log("raspi initialized")
})


function init(server) {
    console.log("server initializing")
    io = Server(server, {
        cors: {
            origins: 'vscode-webview://*'
        }
    })

    io.on('connection', (socket) => {
        console.log("connection initialized by id: ", socket.id)
        socket.on('setMotorSpeed', (newSpeed) => {
            motor1Pin.write(newSpeed)
            console.log("received new speed: ", newSpeed)
            socket.emit("acknowledged", newSpeed)
        })

    })
}

module.exports = {
    init: init
}