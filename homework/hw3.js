"use strict";

function createArray() {
    const arr = [];
    const count = 100;
    let n = 0;
    let m = 100;
    for (let i = 0; i < count; i++) {
        const number = Math.floor(Math.random() * m) + n;
        arr.push(number);
    }
    console.log(arr);
}

function shitPost() {
    const str = 'Hello World!';
    let j = str.length - 1;
    let revStr = [];
    let outStr;

    for (let i = 0; i < str.length; i++) {
        revStr.push(str[j])
        j--;
    }

    outStr = revStr.join('');
    console.log(str);
    console.log(outStr);
    
}

function tonk(){
    const mines = [false, false, false, true, false, true, false, false, false, false];
    let save = "";
    let count = 0;
    console.log("Start movements");
    for (let i = 0; i < mines.length; i++) {
        if (mines[i] === true) {
            save = "Blow"
            count += 1;
        }
        else if (count === 2) {
            console.log("Tonk destroyed");
            break;
        }
        else{
            save = "No mines"
        }
        console.log(`Tonk on ${i+1} square. ${save}`);
        
    }

}

function daysCount(){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let week;
    let arr = [];

    for (let i = 1; i <= 31; i++) {
        arr.push(i);
        for (let j = 0; j < days.length; j++) {
            week = days[j];
            console.log(`${i} января, ${week}`);
        }
    }

    
}


console.log("______________________________");
createArray();
console.log("______________________________");
shitPost();
console.log("______________________________");
tonk();
console.log("______________________________");
daysCount();