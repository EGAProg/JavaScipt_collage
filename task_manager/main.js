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
                <button type="button" id="btnDel" class="btn btn-del">Delete</button>
            </div>
        `;

        let taskDel = document.querySelectorAll('#btnDel'); // Делаем тут, т.к. кнопку удаления мы создали не в HTML файле, а в JS коде
        for (let i = 0; i < taskDel.length; i++) {
            taskDel[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }
}

function main() {
    btnPlace.onclick = btnClick;
}
main();