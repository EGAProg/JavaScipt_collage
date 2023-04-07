"use strict";

import { loadTasks } from "./load.js";
import { placeTask } from "./placeTasks.js";
import { createTitle } from "./title.js";

let Body = document.body;

window.arrayOfObj = new Array(); // Массив для хранения объектов в localstorage
let daylyObj = [
    {
        value: "Купить молока",
        complited: false,
    },
    {
        value: "Помыть посуду",
        complited: false,
    },
    {
        value: "Сделать JS",
        complited: false,
    }
];

export function createToDo(ownerName, tName) {
    let counter = ("Counter"+ownerName)
    Body.innerHTML += `
        <div class="Wrapper inner">
            <div class="placeholder">
                <input type="text" class="hole" id="${ownerName}" placeholder="Place task">
                <button type="submit" id="placeBtn${ownerName}" class="btn" disabled>Place</button>
                <p id="title">${ownerName}</p>
            </div>
            <div class="tasks" id="${ownerName}"></div>
        </div>`;
    createTitle(tName);
    let btnPlace = document.querySelector(`#placeBtn${ownerName}`);
    let placeholder = document.querySelector(`#${ownerName}`);
    let taskPlace = document.querySelector(`.tasks`);

    window.onload = loadTasks(ownerName, daylyObj, counter);
    document.addEventListener("input", function() {
        if (placeholder.value != "") {
            btnPlace.removeAttribute("disabled");
        } else {
            btnPlace.setAttribute("disabled", "disabled");
            
        }
    });
    btnPlace.addEventListener("click", () => {   
        placeTask(taskPlace, placeholder, ownerName);
        btnPlace.setAttribute("disabled", "disabled");
    });
}