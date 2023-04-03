"use strict";

// Add existing elements
let btnPlace = document.querySelector('#placeBtn');
let placeholder = document.querySelector('#placeholder');
let taskPlace = document.querySelector('.tasks')
////////////////////////////////////////////////////////////////////////

function btnClick() {
    if (placeholder.value.length == 0) {
        alert("Please Enter a Task")
    }
    else {
        // Далее я создаю div содержаший span и кнопку
        taskPlace.innerHTML += ` 
            <div class="task">
                <span id="taskname">
                    ${placeholder.value}
                </span>
                <button type="button" id="btnDone" class="btn btn-done">Done</button>
                <button type="button" id="btnDel" class="btn btn-del">Delete</button>
            </div>
        `;
        placeholder.value = '';
        let taskDel = document.querySelectorAll('#btnDel'); // Делаем тут, т.к. кнопку удаления мы создали не в HTML файле, а в JS коде
        let taskDone = document.querySelectorAll('#btnDone');
        for (let i = 0; i < taskDel.length; i++) {
            taskDel[i].onclick = function() {
                this.parentNode.remove();
            }
        }
        for (let i = 0; i < taskDone.length; i++) {
            taskDone[i].onclick = function() {
                this.parentNode.style.backgroundColor = "#47ff8e";
            }
        }
    }
}

function main() {
    btnPlace.onclick = btnClick;
}
main();