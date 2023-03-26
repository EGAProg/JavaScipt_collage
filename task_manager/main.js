"use strict";

// Create lements needed to add later
let container = document.createElement('div'); // Create container and add CSS classes
container.className = ['container', 'inner'];

let btnDone = document.createElement('button'); // Create button and add CSS classes
let btnDel = document.createElement('button');
btnDel.className = ['btn', 'btn-del'];
btnDone.classNames = ['btn-done', 'btn'];
btnDel.textContent = 'Delete';
btnDone.textContent = 'Done';

let hole = document.createElement('input'); // Create a placeholder, add CSS class and ID, and disable it :)
hole.disabled = true;
hole.classNames('hole');
hole.setAttribute('id', 'hole');

var divClone = myDiv.cloneNode(true); // Cloning the div and its all children

////////////////////////////////////////////////////////////////////////

// Add existing elements
let btnPlace = document.querySelector('#placeBtn');
let placeholder = document.querySelector('#placeholder');
////////////////////////////////////////////////////////////////////////

/* 
    Вещи для добаления:
    При нажатии на кнопку Place будет создаваться новый div, который содержит в себе сразу и поле с текстом и две кнопки: Done и Delete.
    Если пользователь ничего не ввел в поле ввода и нажал на кнопку Place будет выводиться Alert.
    
    Немного о самой реализации:
    Каждый раз, когда пользователь нажимает на кнопку Place я буду клонировать весь div и все элементы внутри него, 
    в поле holder я буду задавать value равное тому, что ввел пользователь в placeholder. 
    Для того, чтобы нормально реализовать кнопки Done и Delete мне придется
    к каждому новому div добавлять id с уникальным именем, а для того, чтобы это работало, 
    мне придеся сделать кнопки Done и Delete уникальными для каждого нового div. 
    Я знаю, что есть способ легче и быстрее, но этот пока что единственный, который пришел мне в голову.

    Если ничего не придумаю оставлю так.
*/

////////////////////////////////////////////////////////////////////////
// Functions
function addPlaceholder(placeValue) {
    return;
}

function removePlaceholder(id) {
    return;
}

function main () {
    return;
}
main();