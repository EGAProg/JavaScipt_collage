"use strict";

// Задание 1

let btnCount = document.getElementById("btnCount");
let counter = document.getElementById("counter");

function btnClick() {    
    let intervalId = setInterval(function() { 
        counter.value -= 1; 
        if (counter.value == 0) clearInterval(intervalId);
    }, 1000);
}

function buttonCreate(name) {
    let btnCount = document.createElement("button");
    document.body.append(btnCount);
    btnCount.innerText = name;
    btnCount.addEventListener("click", btnClick);
}

function main() {
    buttonCreate("Timer");
}
main();