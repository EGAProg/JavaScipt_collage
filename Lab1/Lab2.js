"use strict";

function FitstEx() {
    const password = "938";
    const min = 4;

    password.length > min && (password.includes("_") == true || password.includes())? console.log("Пароль надежный") : console.log("Пароль ненадежный");

     


}

function SecondEx() {
    const name = "Egor";
    const surname = "Gysev";

    let fChar = name.slice(0, 1);
    let fName = name.slice(1);
    fChar = fChar.toUpperCase();
    fName = fName.toLowerCase();
    let EdName = fChar + fName;
    let FirstName = EdName.replace(" ", "");

    let sChar = surname.slice(0, 1);
    let sName = surname.slice(1);
    sChar = sChar.toUpperCase();
    sName = sName.toLowerCase();
    let sEdName = sChar + sName;
    let LastName = sEdName.replace(" ", "");

    console.log(LastName);
    
    if (name == FirstName && surname == LastName) {
        console.log("Без изменений");
    }
    else {
        console.log("Изменено");
    }



}
FitstEx();
SecondEx();
