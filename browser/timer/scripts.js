"use strict";

// Задание 1

let btnCount = document.querySelector("#btnCount");
let counter = document.querySelector("#counter");

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

let timerH = document.querySelector("#timer");
let timeInputH = document.querySelector("#timeInput");

function inputUpdate() {
    let timerId;
    let tick = 300;
    let tickTime = tick;
    timerH.innerHTML = timeInputH.value;
    if (tickTime != 0) {
        timerId = setTimeout(function() {
            if (timerH.innerHTML != timeInputH.value) timerH.innerHTML = timeInputH.value;
            tickTime -= 1;
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