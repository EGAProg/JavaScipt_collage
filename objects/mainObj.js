"use strict";

const Body = document.body;
let inp = document.getElementById("inp");
let square = document.getElementsByClassName("square");
let sqr = [document.getElementsById("sqr1"),
        document.getElementsById("sqr2"),
        document.getElementsById("sqr3"),
        document.getElementsById("sqr4")];
function handlerOver() {
    square.style.backgroundColor = "Green";
}
function handlerOut() {
    square.style.backgroundColor = "Red";
}

document.addEventListener("click", e => { // делигирование
    console.log(e);
});

function colorCounters() {

}

function buttonClick() {}
function buttonBlocked() {
    inp.style.display = "none";
}
function buttonUnblocked() {
    inp.style.display = "block";
}
function buttonCreate(name) {
    let btn = document.createElement("button");
    Body.append(btn);
    btn.innerText = name;
    if (name === "Block")
        btn.addEventListener("click", buttonBlocked);
    else if (name === "Unblock")
        btn.addEventListener("click", buttonUnblocked);
    else if (name === "Click") 
        btn.addEventListener("click", buttonClick);

    square.addEventListener("click", handlerOver);
    square.addEventListener("click", handlerOut);
}
function _main_(){
    buttonCreate("Click");
    buttonCreate("Block");
    buttonCreate("Unblock");

}
_main_();



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