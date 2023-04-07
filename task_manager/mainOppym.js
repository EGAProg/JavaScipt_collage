"use strict";

import { loadTasks } from "./load.js";
import { controlBtns } from "./btns.js";
import { Storage } from "./obsConstructor.js";
import { placeTask } from "./placeTasks.js";
import { createTitle } from "./title.js";
import { createToDo } from "./createToDo.js";

window.arrayOfObj = new Array(); // Массив для хранения объектов в localstorage

document.addEventListener("DOMContentLoaded", () => {
    createToDo("OPPYM", "task manager");
});