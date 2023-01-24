"use strict";

const flats = 4,
 floors = 4, 
 enterance = 3;

console.log("Number of flats in whole building:", flats*floors*enterance);
console.log("Number of flats in one entarance:", flats*floors);




const axCort = 7, 
    ayCort = -5,
    bxCort = 9, 
    byCort = 23;

let decY = ayCort - byCort;
let decX = axCort - bxCort;
let C = decY**2 + decX**2;
let output = Math.sqrt(C);
console.log("Distance between points equal:", output.toFixed(2));