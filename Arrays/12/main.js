let tBody = document.getElementById("tbody");

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

function findStudent() {    
    let filter, table, tr, td, i, txtValue;
    
    filter = findStud.value.toUpperCase();
    table = document.getElementById("table_id");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function getFullName(student) {
    return student.surname + "\n" + student.name + "\n";
}

function fillTable(obj = {}) {
    let tr = document.createElement("tr");
    tBody.append(tr);
    createTd(tr, obj.num);
    createTd(tr, obj.surname);
    createTd(tr, obj.name);
    createTd(tr, obj.age);
}


function main() {
    for (let i = 0; i < studbecker.length; i++) {
        fillTable(studbecker[i]);
    }
}
main();
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
