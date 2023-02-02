"use strict";
function FirstWork() {
    console.log("...Первое задание...")
    const fString = "robin_singh@example.com";
    let sString = fString.search("@");
    let tString = fString.slice(0, sString);
    let finString = tString.slice(sString, 0) + fString.slice(sString);
    let test = fString.search("_");
    let secondTest = fString.slice(0, test);
    console.log(secondTest, "...", finString,"\n");
}
function SecondWork() {
    console.log("...Второе задание...")
    const str = "JavaScript Exercises"; // Смотрел ТЗ
    //let std = str.replace(" ", "");
    //let string = std.replace("Java", "java");
    
    let idSpace = str.indexOf(" ");
    let fWord = str.slice(0, idSpace);
    let sWord = str.slice(idSpace);
    let fChar = fWord.slice(0, 1);
    fWord = fWord.slice(1);
    let fLower = fChar.toLowerCase();
    let string = fLower + fWord + sWord;
    let std = string.replace(" ", "");
    console.log(std,"\n");
}

function ThirdWork() {
    console.log("...Третье задание...")
    let str = "У лукоморья дуб зеленый, золотая цепь на дубе том. И днем и ночью кот ученый все ходит по цепи кругом";
    const maxLength = 25;
    let output = String("");
    if (str.length > maxLength) {
        let string = str.slice(0, maxLength);
        output = string + "...";
    }
    else {
        output = string;
    }
    console.log(output);
}

FirstWork();
SecondWork();
ThirdWork();