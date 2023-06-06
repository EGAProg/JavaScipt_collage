export function logic(wrapper, timerID) {
    let prevEl = "";
    let numberOfCoincidences = 0;
    wrapper.addEventListener("click", function(e) 
    {
        if (e.target.classList.contains("card_block")) 
        {
            e.target.classList.remove("card_block");
            if (prevEl == "" ) 
            {
                prevEl = e.target;
            }
            else if (prevEl.classList.contains("blue") && e.target.classList.contains("blue")) 
            {
                prevEl = "";
                numberOfCoincidences++;
            }
            else if (prevEl.classList.contains("pink") && e.target.classList.contains("pink")) 
            {
                prevEl = "";
                numberOfCoincidences++
            }
            else {
                prevEl.classList.add("card_block");
                e.target.classList.add("card_block");
                prevEl = "";
            }
        }
        if(numberOfCoincidences == 8) {
            alert("Good Job!");
            clearTimeout(timerId);
            window.location.reload();
        }
    } );
    
    let timerId = setTimeout(() => {
        alert('Время игры закончилось');
        
        window.location.reload();
    }, 60000);  
};