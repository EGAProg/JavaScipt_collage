"use strict";
let Body = document.body;

class Storage { // конструктор объекта для хранения в localstorage
    constructor(value = "", complited = false) {
        this.value = value;
        this.complited = complited;
    }
};
window.arrayOfObj = new Array(); // Массив для хранения объектов в localstorage
let daylyObj = [
    {
        value: "Купить молока",
        complited: false,
    },
    {
        value: "Помыть посуду",
        complited: false,
    },
    {
        value: "Сделать JS",
        complited: false,
    }
];

function loadTasks(name) { // ERR:Cannot read properties of undefined (reading 'value')
    console.log("Loading tasks...");
    console.log(name);
    let counter = ("Counter"+name)
    console.log(arrayOfObj.length);
    console.log(daylyTasksArray)
    let taskPlace = document.querySelector(`.tasks`);
    for (let i = 0; i < daylyObj.length; i++) {
        taskPlace.innerHTML += `
            <div class="task"">
                <span class="taskname">
                    ${daylyObj[i].value}
                </span>
                <button type="button" id="btnDone" class="btn btn-done">Done</button>
                <button type="button" id="btnDel" class="btn btn-del">Delete</button>
            </div>`;
        controlBtns(name, arrayOfObj, daylyObj);
    }
    if (localStorage.length > 0 && name in localStorage) {
        for (let j = 0; j < counter.length; j++) { // array of tasks = 0, почему?
            let task = JSON.parse(localStorage.getItem(name)); // Возвращает объект
            let val = Object.values(task);
            taskPlace.innerHTML += `
                <div class="task"">
                    <span class="taskname">
                        ${val[j].value}
                    </span>
                    <button type="button" id="btnDone" class="btn btn-done">Done</button>
                    <button type="button" id="btnDel" class="btn btn-del">Delete</button>
                </div>`;
            controlBtns(name, arrayOfObj, task);
        }
    }
}

function controlBtns(name, array, obj=null, value) {
    let counterName = ("Counter"+name);
    let taskDel  = document.querySelectorAll('#btnDel');
    let taskDone = document.querySelectorAll('#btnDone');
    for (let i = 0; i < taskDel.length; i++) {
        taskDel[i].onclick = function() {
        let result = confirm("Delete task?");
            if(result) {
                this.parentNode.remove();
                let task = JSON.parse(localStorage.getItem(name));
                let counter = JSON.parse(localStorage.getItem(counterName));
                localStorage.removeItem(counterName);
                JSON.stringify(counterName, JSON.stringify(counter-1));
                let indexArray = task.indexOf(obj);
                if (indexArray > -1) { // only splice array when item is found
                    array.splice(index, 1); // 2nd parameter means remove one item only
                  }
                console.log(array);
                localStorage.setItem(name, JSON.stringify(array));
                
            }
        }
    }
    for (let i = 0; i < taskDone.length; i++) {
        taskDone[i].onclick = function() {
            this.parentNode.style.backgroundColor = "#47ff8e"
            let done = JSON.parse(localStorage.getItem(name));
            localStorage.removeItem(name);
            
            done.value = value;
            done.complited = true;
            arrayOfObj.push(done)
            localStorage.setItem(name, JSON.stringify(arrayOfObj));
        }
    }
}

function placeTask(taskPlace, input, name) {
    taskPlace.innerHTML += `
        <div class="task">
            <span class="taskname">
                ${input.value}
            </span>
            <button type="button" id="btnDone" class="btn btn-done">Done</button>
            <button type="button" id="btnDel" class="btn btn-del">Delete</button>
        </div>`;
        
        let lstorage = new Storage(input.value);
        arrayOfObj.push(lstorage)
        localStorage.setItem(name, JSON.stringify(arrayOfObj)); //send array of Objects to localStorage
        for (let i = 0; i < arrayOfObj.length; i++) {
            localStorage.setItem("Counter"+name, i+1);
        }
        console.log(input.value)
        input.value = '';
        controlBtns(name, arrayOfObj, lstorage, input.value);
}

// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA, CYKA!

function createToDo(ownerName) {
    Body.innerHTML += `
        <div class="Wrapper inner">
            <div class="placeholder">
                <input type="text" class="hole" id="${ownerName}" placeholder="Place task">
                <button type="submit" id="placeBtn${ownerName}" class="btn" >Place</button>
                <p>${ownerName}</p>
            </div>
            <div class="tasks" id="${ownerName}"></div>
        </div>`;
    let btnPlace = document.querySelector(`#placeBtn${ownerName}`);
    let placeholder = document.querySelector(`#${ownerName}`);
    let taskPlace = document.querySelector(`.tasks`);
    document.addEventListener("DOMContentLoaded", () => {
        loadTasks(ownerName, daylyTasksArray);
    });

    window.onload = loadTasks(ownerName);

    btnPlace.addEventListener("click", () => {   
        placeTask(taskPlace, placeholder, ownerName);
    });
}