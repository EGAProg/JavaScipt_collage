"use strict";
let Body = document.body;

class Storage { // конструктор объекта для хранения в localstorage
    constructor(value, complited=false) {
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

function loadTasks(name, daylyarr=null) { // ERR:Cannot read properties of undefined (reading 'value')
    console.log("Loading tasks...");
    console.log(name);
    let counter = ("Counter"+name)
    console.log(arrayOfObj.length);
  
    let taskPlace = document.querySelector(`.tasks`);
    if(daylyarr != null) {
        for (let i = 0; i < daylyarr.length; i++) {
            taskPlace.innerHTML += `
                <div class="task"">
                    <span class="taskname">
                        ${daylyarr[i].value}
                    </span>
                    <button type="button" id="btnDone" class="btn btn-done">Done</button>
                    <button type="button" id="btnDel" class="btn btn-del">Delete</button>
                </div>`;
            controlBtns(name, arrayOfObj, daylyObj);
        }
    }
    if (localStorage.length > 0) {
        try {
            let task = JSON.parse(localStorage.getItem(name)); // Возвращает объект
            console.log(task);
            console.log(task.length+1);
            for (let j = 0; j < task.length; j++) { 
                taskPlace.innerHTML += `
                    <div class="task"">
                        <span class="taskname">
                            ${task[j].value}
                        </span>
                        <button type="button" id="btnDone" class="btn btn-done">Done</button>
                        <button type="button" id="btnDel" class="btn btn-del">Delete</button>
                    </div>`;
                controlBtns(name, arrayOfObj, task);
            }
        } catch (ex) {
            console.error(ex);
        }
    }
}

function controlBtns(name, array, obj, input) {
    let counterName = ("Counter"+name);
    let taskDel  = document.querySelectorAll('#btnDel');
    let taskDone = document.querySelectorAll('#btnDone');
    for (let i = 0; i < taskDel.length; i++) { // delete task
        taskDel[i].onclick = function() {
        let result = confirm("Delete task?");
            if(result) {
                this.parentNode.remove();
                let task = JSON.parse(localStorage.getItem(name));
                let counter = JSON.parse(localStorage.getItem(counterName));
                parseInt(counter);
                counter -= 1;
                localStorage.removeItem(counterName);
                if (counter < 0) {
                    counter = 0;
                    localStorage.setItem(counterName, counter);
                }
                else {
                    localStorage.setItem(counterName, counter);
                }

                let indexArray = task.indexOf(obj[i]);
                let removed = array.splice(indexArray, 1);
                console.log(array);
                localStorage.setItem(name, JSON.stringify(removed));
                
            }
        }
    }
    for (let i = 0; i < taskDone.length; i++) { // complete task
        taskDone[i].onclick = function() {
            this.parentNode.style.backgroundColor = "#47ff8e"
            
            let done = JSON.parse(localStorage.getItem(name)); // null
            localStorage.removeItem(name);
            let holder = new Storage(input, true);
            localStorage.setItem(name, JSON.stringify(holder));
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
        let outValue = input.value;
        arrayOfObj.push(lstorage)
        localStorage.setItem(name, JSON.stringify(arrayOfObj)); //send array of Objects to localStorage
        for (let i = 0; i < arrayOfObj.length; i++) {
            localStorage.setItem("Counter"+name, i+1);
        }
        console.log(input.value)
        input.value = '';
        controlBtns(name, arrayOfObj, lstorage, outValue);
}

function createToDo(ownerName) {
    Body.innerHTML += `
        <div class="Wrapper inner">
            <div class="placeholder">
                <input type="text" class="hole" id="${ownerName}" placeholder="Place task">
                <button type="submit" id="placeBtn${ownerName}" class="btn" disabled>Place</button>
                <p>${ownerName}</p>
            </div>
            <div class="tasks" id="${ownerName}"></div>
        </div>`;
    let btnPlace = document.querySelector(`#placeBtn${ownerName}`);
    let placeholder = document.querySelector(`#${ownerName}`);
    let taskPlace = document.querySelector(`.tasks`);

    window.onload = loadTasks(ownerName, daylyObj);
    document.addEventListener("input", function() {
        if (placeholder.value != "") {
            btnPlace.removeAttribute("disabled");
        } else {
            btnPlace.setAttribute("disabled", "disabled");
            
        }
    });
    btnPlace.addEventListener("click", () => {   
        placeTask(taskPlace, placeholder, ownerName);
        btnPlace.setAttribute("disabled", "disabled");
    });
}