let tBody = document.getElementById("tbody");

let nameInput = document.getElementById("FIOName");
let surnameInput = document.getElementById("FIOSurname");
let lastnameInput = document.getElementById("FIOLastname");
let bDateInput = document.getElementById("bDate");
let sDateInput = document.getElementById("learnStartDate");
let endDateInput = document.getElementById("learnEndDate");
let falkInput = document.getElementById("fackultet");
let couseInput = document.getElementById("course");

let addStud = document.getElementById("addStudent");

let studbecker = [
    {
        surname: "Gysev",
        name: "George",
        lastName: "Alexander",
        birthDate: new Date(2004, 10, 22).toLocaleString("ru").slice(0, 10),
        studStart: new Date(2021, 08, 03).toLocaleString("ru").slice(0, 10),
        studEnd: new Date(2025, 05, 25).toLocaleString("ru").slice(0, 10),
        course: "ISaP",
        courseCount: 2
    },
    {
        surname: "Lugigin",
        name: "Kirill",
        lastName: "Alex",
        birthDate: new Date(2005, 09, 20).toLocaleString("ru").slice(0, 10),
        studStart: new Date(2020, 08, 03).toLocaleString("ru").slice(0, 10),
        studEnd: new Date(2024, 05, 25).toLocaleString("ru").slice(0, 10),
        course: "SSE",
        courseCount: 3
    },
    {
        surname: "Popov",
        name: "Ivan",
        lastName: "Vladimir",
        birthDate: new Date(2004, 03, 11).toLocaleString("ru").slice(0, 10),
        studStart: new Date(2022, 08, 03).toLocaleString("ru").slice(0, 10),
        studEnd: new Date(2026, 05, 25).toLocaleString("ru").slice(0, 10),
        course: "SysAdm", 
        courseCount: 1
    }
];

function createTd(tableEl, text) {
    let td = document.createElement("td");
    td.append(text);
    tableEl.append(td);
}



function getFullName(student) {
    return student.surname + "\n" + student.name + "\n" + student.lastName;
}

function fillTable(obj = {}) {
    let tr = document.createElement("tr");
    tBody.append(tr);
    createTd(tr, getFullName(obj));
    createTd(tr, obj.birthDate);
    createTd(tr, obj.studStart + "-" + obj.studEnd);
    createTd(tr, obj.course);
    createTd(tr, obj.courseCount);
}

function createNewStudent() {
    let newStud = {    
        surname: surnameInput.value.trim(),
        name: nameInput.value.trim(),
        lastName: lastnameInput.value.trim(),
        birthDate: bDateInput.value.trim().toLocaleString("ru").slice(0, 10),
        studStart: new Date(sDateInput.value, 08, 03).toLocaleString("ru").slice(0, 10),
        studEnd: new Date(endDateInput.value, 05, 25).toLocaleString("ru").slice(0, 10),
        course: falkInput.value.trim(),
        courseCount: couseInput.value.trim()
    }
    studbecker.push(newStud);
    fillTable(studbecker[studbecker.length - 1]);
}

function main() {
    for (let i = 0; i < studbecker.length; i++) {
        fillTable(studbecker[i]);
    }
}
main();

addStud.addEventListener("click", createNewStudent);


document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );

        for(const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for(const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };

    document.querySelectorAll('#table_id thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));

});