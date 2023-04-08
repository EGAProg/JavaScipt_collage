"use strict";
export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
        let t = array[i];
        array[i] = array[j];
        array[j] = t;
    }
    return array;
}
