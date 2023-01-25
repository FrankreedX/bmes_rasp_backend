const Server = require('socket.io')

let io
const {Motor} = require("./motorWrapper");
const {Valve} = require("./valveWrapper");

let motor = new Motor('GPIO21')
let valve = new Valve('GPIO16')

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
            motor.Speed = newSpeed
            console.log("received new speed: ", newSpeed)
            socket.emit("acknowledged", newSpeed)
        })
        socket.on('openValve', () => {
            valve.open()
            console.log("opened valve")
            socket.emit("acknowledged", "valve opening")
        })
        socket.on('closeValve', () => {
            valve.close()
            console.log("closed valve")
            socket.emit("acknowledged", "valve closing")
        })
    })
}

module.exports = {
    init: init
}