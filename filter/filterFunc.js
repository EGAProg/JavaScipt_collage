"use strict";

let objects = [
    { name: 'Василий',
      surname: 'Васильев' 
    },
    { name: 'Иван',
      surname: 'Иванов' 
    },
    { name: 'Пётр',
      surname: 'Петров' 
    }
];
  
function filter(objects, key, value) {
    let result = [];
    for (let i = 0; i < objects.length; i++) {
        let obj = objects[i];
  
        if (obj[key] === value) result.push(obj);
    }
    return result;
}
  
let filteredArray = filter(objects, 'name', 'Иван'); 
console.log(filteredArray); 