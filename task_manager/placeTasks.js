import { controlBtns } from "./btns.js";
import { Storage } from "./obsConstructor.js";
export function placeTask(taskPlace, input, name, counter) {
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
            localStorage.setItem(counter, count+1);
        }
        console.log(input.value)
        input.value = '';
        controlBtns(name, arrayOfObj, lstorage, outValue);
}