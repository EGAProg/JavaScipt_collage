"use strict";

import { createToDo } from "./createToDo.js";

window.arrayOfObj = new Array(); // Массив для хранения объектов в localstorage

document.addEventListener("DOMContentLoaded", () => {
    createToDo("OPPYM", "task manager");
});