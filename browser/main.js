"use strict";

const Select = document.createElement("select");
const Opt = document.createElement("option");

const arr = [{
            value: "Stuff1", 
            label: "Tag1"
        },
        {
            value: "Stuff2", 
            label: "Tag2"
        },
        {
            value: "Stuff3", 
            label: "Tag3",
        }];

function fillList(arr, value) {
    
    document.body.appendChild(Select);
    arr.forEach(function(element) {
        Opt.value = element.value;
        Opt.innerHTML = element.label;
        Select.appendChild(Opt)
        if (Opt.value === value) {
            Opt.setAttribute('selected', true);
        }
    });
    return Select;
}



function _main_() {
    fillList(arr, "Tag1");
    
}

_main_();