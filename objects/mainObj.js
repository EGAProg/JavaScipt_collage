"use strict";

const Body = document.body;
let inp = document.getElementById("inp");
let square = document.querySelectorAll(".square");
let div = document.querySelector(".holder");
// let sqr = [document.getElementById("sqr1"),
//         document.getElementById("sqr2"),
//         document.getElementById("sqr3"),
//         document.getElementById("sqr4")];


// function handlerOver() {
//     square.style.backgroundColor = "Green";
// }
// function handlerOut() {
//     square.style.backgroundColor = "Red";
// }

// function click() {
//     for (let i = 0; i < sqr.length; i++) {
//         sqr[i].addEventListener("click", (e) => e.style.backgroundColor = "green");
//     }
// }

function handler() {
    div.addEventListener("click", (e) => {
        if (e.target.classList.contains("square")) {
            square.forEach((sqr) => {
                if (sqr === e.target) sqr.classList.add("Green");
                else {
                    sqr.classList.remove("Green");
                }
            });
        }
    });
}

// function buttonClick() {}


// function buttonBlocked() {
//     inp.style.display = "none";
// }
// function buttonUnblocked() {
//     inp.style.display = "block";
// }
// function buttonCreate(name) {
//     let btn = document.createElement("button");
//     Body.append(btn);
//     btn.innerText = name;
//     if (name === "Block")
//         btn.addEventListener("click", buttonBlocked);
//     else if (name === "Unblock")
//         btn.addEventListener("click", buttonUnblocked);
//     else if (name === "Click") 
//         btn.addEventListener("click", buttonClick);

//     square.addEventListener("click", handlerOver);
//     square.addEventListener("click", handlerOut);
// }
function _main_(){
//     buttonCreate("Click");
//     buttonCreate("Block");
//     buttonCreate("Unblock");
//     click();
    handler();
}
_main_();

// задание 8 смена цветов

// Задание 7
// function handlerOver() {
//     sqr.style.backgroundColor = "Green";
// }
// function handlerOut() {
//     sqr.style.backgroundColor = "Red";
// }
// Задание 6
// function buttonBlocked() {
//     sqr.style.display = "none";
// }
// function buttonUnblocked() {
//     sqr.style.display = "block";
// }
// Задание 5
// function buttonBlocked() {
//     inp.readOnly = true;
//     inp.style.display = "none";
// }
// function buttonUnblocked() {
//     inp.readOnly = false;
//     inp.style.display = "inline";
// }
// Задание 4
// function buttonClick() {
//     let str = inp.value;
//     inp.value = inp2.value;
//     inp2.value = str;
// }
// Задание 3
// function buttonClick() {
//     let str = inp1.value;
//     !(inp.value.length === 0) ? alert(`You entered: "${str}"`) : alert("Nothings!");
// }
// Задание 2
// function buttonClick() { 
//     inp.value = "test@email.ru";
// }
// ЗАадание 1
// function buttonClick() {
//     alert("Click");
// }