"use strict";

function FitstEx() {
    const password = "938";
    const min = 4;

    password.length > min && (password.includes("_") == true || password.includes("-"))? console.log("Пароль надежный") : console.log("Пароль ненадежный");
}

function SecondEx() {
    const name = "Egor";
    const surname = "Gysev";
    let firstName = name[0].toUpperCase() + name.slice(1).toLowerCase()
    let lastName = surname[0].toUpperCase() + surname.slice(1).toLowerCase()
    console.log(firstName);
    console.log(lastName);
    if (name == firstName && surname == lastName) {
        console.log("Без изменений");
    }
    else {
        console.log("Изменено");
    }
}
FitstEx();
SecondEx();
