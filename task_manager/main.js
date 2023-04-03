"use strict";
let Body = document.body;
let myStorage = window.localStorage; // Заготовка на будущее :(



////////////////////////////////////////////////////////////////

function createToDo(name) { // Тут где-то ошибка. Не оттуда и не туда отправляются значения из placeholder.value при нажатии на кнопку
    Body.innerHTML += 
        `<div class="Wrapper inner">
            <div class="placeholder">
                <input type="text" class="hole" id="${name}" placeholder="Place task">
                <button type="button" id="placeBtn${name}" class="btn">Place</button>
                <p>${name}</p>
            </div>
            <div class="tasks"></div>
        </div>`;
    let btnPlace = document.querySelector(`#placeBtn${name}`);
    let placeholder = document.querySelector(`#${name}`);
    let taskPlace = document.querySelector(`.tasks`);

    btnPlace.addEventListener("click", () => {
        if (placeholder.value.length == 0) {
            alert("Please Enter a Task")
        }
        else {
            // Create a new div and add the placeholder element
            taskPlace.innerHTML += ` 
                <div class="task">
                    <span id="taskname">
                        ${placeholder.value}
                    </span>
                    <button type="button" id="btnDone" class="btn btn-done">Done</button>
                    <button type="button" id="btnDel" class="btn btn-del">Delete</button>
                </div>
            `;
            myStorage.setItem(placeholder.value);
            console.log(placeholder.value)
            placeholder.value = '';

            let taskDel = document.querySelectorAll('#btnDel'); // Added here because I'm created this btn in innerHTML
            let taskDone = document.querySelectorAll('#btnDone');

            for (let i = 0; i < taskDel.length; i++) {
                taskDel[i].onclick = function() {
                    let result = confirm("Delete task?");
                    myStorage.removeItem(placeholder.value);
                    if(result) this.parentNode.remove();
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

function main() {
    createToDo("Egor");
    createToDo("Vova");
    createToDo("Kirill");
}
main();