export function logic(wrapper) {
    let prevEl = "";
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
            }
            else if (prevEl.classList.contains("pink") && e.target.classList.contains("pink")) 
            {
                prevEl = "";
            }
            else {
                prevEl.classList.add("card_block");
                e.target.classList.add("card_block");
                prevEl = "";
            }
        }
    } );    
};