"use strict";

import { createToDo } from "./createToDo.js";
import { fetchPost } from "./post.js";
import { fetchDelete } from "./delete.js";
import { fetchGet} from './get.js';
import { fetchPatch } from "./patch.js";

window.arrayOfObj = new Array(); // Массив для хранения объектов в localstorage
let daylyObj = [
    {
        name: "Купить молока",
        owner: "Loh",
        done: false,
    },
    {
        name: "Помыть посуду",
        owner: "Loh",
        done: false,
    },
    {
        name: "Сделать JS",
        owner: "Loh",
        done: false,
    }
];
document.addEventListener("DOMContentLoaded", () => {
    createToDo("OPPYM", "task manager");
    fetchPost(daylyObj);
});