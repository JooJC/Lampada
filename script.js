const turnOn = document.querySelector("#turnOn");
const turnOff = document.querySelector("#turnOff");
const lamp = document.querySelector("#lamp");
const replaceLamp = document.querySelector("#replaceLamp");

function isBroken () {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isBroken()) {
    lamp.src = './img/ligada.jpg'        
    }
}

function lampOff() {
    if (!isBroken()) {
    lamp.src = './img/desligada.jpg'        
    }
}

function lampBreak() {
    let audio = new Audio("./img/bulb.mp3")
    audio.play()    
    lamp.src = './img/quebrada.jpg'
}

function lampReplace() {
    if (isBroken()) {
        lamp.src = './img/desligada.jpg'        
        }
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
replaceLamp.addEventListener('click', lampReplace)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBreak)