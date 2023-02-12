"use strict";


const express = "0451";
if (!isNaN(express)&&isFinite(express)) {
    if (express % 2 === 0) console.log("The number is even");
    else console.log("The number is odd");
}
else console.log("Not a number");
