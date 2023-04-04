"use strict";
let Body = document.body;

let obj = [];
////////////////////////////////////////////////////////////////
let i = 1;
function retreatObject(name) {
    for (let j = 0; j < localStorage.length; j++) {
        let task = JSON.parse(localStorage.getItem(name+=i));
        let taskPlace = document.querySelector(`.tasks`);
        taskPlace.innerHTML += ` 
            <div class="task" id="${name}">
                <span class="taskname">
                    ${task}
                </span>
                <button type="button" id="btnDone" class="btn btn-done">Done</button>
                <button type="button" id="btnDel" class="btn btn-del">Delete</button>
            </div>
        `;
    }  
}

function createToDo(ownerName) { // Тут где-то ошибка. Не оттуда и не туда отправляются значения из placeholder.value при нажатии на кнопку
    Body.innerHTML += 
        `<div class="Wrapper inner">
            <div class="placeholder">
                <input type="text" class="hole" id="${ownerName}" placeholder="Place task">
                <button type="button" id="placeBtn${ownerName}" class="btn">Place</button>
                <p>${ownerName}</p>
            </div>
            <div class="tasks" id="${ownerName}"></div>
        </div>`;
    let btnPlace = document.querySelector(`#placeBtn${ownerName}`);
    let placeholder = document.querySelector(`#${ownerName}`);
    let taskPlace = document.querySelector(`.tasks`);
    
    document.addEventListener("DOMContentLoaded", (event) => {
        retreatObject(ownerName);
    });
    

    btnPlace.addEventListener("click", () => {
        
        if (placeholder.value.length == 0) {
            alert("Please Enter a Task")
        }
        else {
            // Create a new div and add the placeholder element
            
            taskPlace.innerHTML += ` 
                <div class="task" id="${ownerName}">
                    <span class="taskname">
                        ${placeholder.value}
                    </span>
                    <button type="button" id="btnDone" class="btn btn-done">Done</button>
                    <button type="button" id="btnDel" class="btn btn-del">Delete</button>
                </div>
            `;
            
            let arr = [];

            let storageArr = [
                {
                    key: key,
                    holder: placeholder.value,
                    done: false, // if done then true
                }
            ];
            
            storageArr.push({key: ownerName, value: placeholder.value});
            localStorage.setItem(storageArr.key, JSON.stringify(storageArr.value ));
           
            console.log(placeholder.value)
            placeholder.value = '';
            

            let taskDel = document.querySelectorAll('#btnDel'); // Added here because I'm created this btn in innerHTML
            let taskDone = document.querySelectorAll('#btnDone');

            for (let i = 0; i < taskDel.length; i++) {
                taskDel[i].onclick = function() {
                    let result = confirm("Delete task?");
                    if(result) {
                        this.parentNode.remove();
                        localStorage.removeItem(ownerName, placeholder.value);
                    }
                }
            }
            for (let i = 0; i < taskDone.length; i++) {
                taskDone[i].onclick = function() {
                    this.parentNode.style.backgroundColor = "#47ff8e"
                }
            }
        }
    });
}
i++;


function main() {
    createToDo("OPPYM");
}
main();