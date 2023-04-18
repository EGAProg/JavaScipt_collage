//"use strict";

const Body = document.body;
let trHead = document.getElementById("trHead");
let tBody = document.getElementById("tbody");

let studbecker = [
    {
        surname: "Gysev",
        name: "George",
        lastName: "Alexander",
        birthDate: new Date(2004, 11, 22).toLocaleString("ru").slice(0, 10),
        studStart: new Date(2021, 09, 03).toLocaleString("ru").slice(0, 10),
        studEnd: new Date(2025, 06, 25).toLocaleString("ru").slice(0, 10),
        course: "ISaP"   
    },
    {
        surname: "Lugigin",
        name: "Kirill",
        lastName: "Alex",
        birthDate: new Date(2005, 20, 10).toLocaleString("ru").slice(0, 10),
        studStart: new Date(2020, 09, 03).toLocaleString("ru").slice(0, 10),
        studEnd: new Date(2024, 06, 25).toLocaleString("ru").slice(0, 10),
        course: "SSE"   
    },
    {
        surname: "Popov",
        name: "Ivan",
        lastName: "Vladimir",
        birthDate: new Date(2004, 03, 11).toLocaleString("ru").slice(0, 10),
        studStart: new Date(2022, 09, 03).toLocaleString("ru").slice(0, 10),
        studEnd: new Date(2026, 06, 25).toLocaleString("ru").slice(0, 10),
        course: "SysAdm"   
    },
]

// let birthDate = new Date(2004, 11, 22);

function createTd(tableEl, text) {
    let td = document.createElement("td");
    td.append(text);
    tableEl.append(td);
}

function fillTable(obj = {}) {
    let tr = document.createElement("tr");
    tBody.append(tr);
    createTd(tr, obj.surname);
    createTd(tr, obj.name);
    createTd(tr, obj.lastName);
    createTd(tr, obj.birthDate);
    createTd(tr, obj.studStart + "-" + obj.studEnd);
    createTd(tr, obj.course);
}

function main() {
    for (let i = 0; i < studbecker.length; i++) {
        fillTable(studbecker[i]);
    }
}
main();