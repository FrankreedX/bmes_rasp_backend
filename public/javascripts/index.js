let submitBtn
let motorSpeed

window.onload = ()=>{
    submitBtn = document.getElementById("submitMotorSpeed")
    motorSpeed = document.getElementById("motorSpeed")
}

function submitMotorSpeed(){
    $.get("/motorSpeed", [data],[callback]);
}