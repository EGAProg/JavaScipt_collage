"use strict";

// Задание 1

let btnCount = document.getElementById("btnCount");
let counter = document.getElementById("counter");

function btnClick() {
    if (counter.value != 0) {  
        let intervalId = setInterval(function() { 
            counter.value -= 1; 
            if (counter.value == 0) {
                clearInterval(intervalId);
            }
        }, 1000);
    }
}

function buttonCreate(name) {
    let btnCount = document.createElement("button");
    document.body.append(btnCount);
    btnCount.innerText = name;
    btnCount.addEventListener("click", btnClick);
}

// Задание 2

let timer = document.getElementById("timer");
let timeInput = document.createElement("timeInput");

function inputUpdate() {
    let timerId
    const tick = 300;
    let tickTime = tick;
    if (tickTime != 0) {
        timerId = setTimeout(function() {
            timer = timeInput;
            if (timer != timeInput) timer = timeInput;
            tickTime-=1;
        }, tick);
    }
    else {
        clearTimeout(timerId);
    }
}

function main() {
    buttonCreate("Timer");
    inputUpdate();
}
main();