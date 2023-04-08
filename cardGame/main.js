"use strict";

import { shuffle } from "./shuffle.js";
import { logic } from "./logic.js";
import { drawGameObjects } from "./draw.js";

let arrayOfNumber = ['pink', 'blue', 'pink', 'blue', 'pink', 'blue', 'pink', 'blue'];
let wrapper = document.querySelector(".main");

function startGame() {
    console.log(shuffle(arrayOfNumber));
    drawGameObjects(arrayOfNumber, wrapper);
    logic(wrapper);
}
startGame();