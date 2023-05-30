import { controlBtns } from "./btns.js";
export function loadTasks(name, daylyarr=null) { // ERR:Cannot read properties of undefined (reading 'value')
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
    console.log("Loading tasks...");
    console.log(name);
    let count = 0
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
            count++
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
                count++;
            }
        } catch (ex) {
            console.error(ex);
        }
    }
    
};