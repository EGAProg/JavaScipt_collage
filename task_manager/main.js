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