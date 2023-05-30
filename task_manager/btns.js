import { Storage } from "./obsConstructor.js";
import { fetchDelete } from "./delete.js";
import { fetchPatch } from "./patch.js";

export function controlBtns(name, array, obj, input) {
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
                let count = 0;
                localStorage.removeItem(counterName);
                if (count < 0) {
                    count = 0;
                    localStorage.setItem(counterName, count);
                }
                else {
                    localStorage.setItem(counterName, count);
                }

                let indexArray = task.indexOf(obj[i]);
                let removed = array.splice(indexArray, 1);
                console.log(array);
                localStorage.setItem(name, JSON.stringify(removed));
                fetchDelete(this.parentElement.parentElement[i])
            }
        }
    }
    for (let i = 0; i < taskDone.length; i++) { // complete task
        taskDone[i].onclick = function() {
            this.parentNode.style.backgroundColor = "#47ff8e"
            
            localStorage.removeItem(name);
            let holder = new Storage(input, true);
            localStorage.setItem(name, JSON.stringify(holder));
            fetchPatch(this.parentElement.parentElement[i],{done:true})
        }
    }
    
}