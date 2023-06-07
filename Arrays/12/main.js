let tBody = document.getElementById("tbody");
let thTags = document.getElementsByTagName("th");

let studbecker = [
    {
        num: 2,
        surname: "Gysev",
        name: "George",
        age: 18
    },
    {
        num: 1,
        surname: "Luginin",
        name: "Kirill",
        age: 17
    },
    {
        num: 3,
        surname: "Popov",
        name: "Ivan",
        age: 18
    }
];

function createTd(tableEl, text) {
    let td = document.createElement("td");
    td.append(text);
    tableEl.append(td);
}

function fillTable(obj = {}) {
    let tr = document.createElement("tr");
    tBody.append(tr);
    createTd(tr, obj.num);
    createTd(tr, obj.surname);
    createTd(tr, obj.name);
    createTd(tr, obj.age);
}

function sortTable(colIndex, ascending) {
    let rows = Array.from(tBody.querySelectorAll("tr"));
    rows.sort((a, b) => {
        let aVal = a.cells[colIndex].textContent;
        let bVal = b.cells[colIndex].textContent;
        if (ascending) {
            return aVal.localeCompare(bVal);
        } else {
            return bVal.localeCompare(aVal);
        }
    });
    tBody.innerHTML = "";
    rows.forEach(row => tBody.appendChild(row));
}

for (let i = 0; i < studbecker.length; i++) {
    fillTable(studbecker[i]);
}

for (let i = 0; i < thTags.length; i++) {
    let ascending = true;
    thTags[i].addEventListener("click", () => {
        sortTable(i, ascending);
        ascending = !ascending;
    });
}