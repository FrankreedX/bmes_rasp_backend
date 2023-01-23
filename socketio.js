const Server = require('socket.io')
const {motor1Pin} = require("./raspi");

let io

function init(server){
    console.log("server initializing")
    io = Server(server, {
        cors: {
            origins: 'vscode-webview://*'
        }
    })

    io.on('connection', (socket)=>{
        console.log("connection initialized by id: ", socket.id)
        socket.on('setMotorSpeed', (newSpeed)=>{
            // motor1Pin.write(newSpeed)
            console.log("received new speed: ", newSpeed)
            socket.emit("acknowledged", newSpeed)
        })

    })
}

module.exports = {
    init: init
}