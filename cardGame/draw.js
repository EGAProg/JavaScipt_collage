export function drawGameObjects(array, wrapper) {
    
    for (let i = 0; i < array.length; i++) {
        wrapper.innerHTML += `<div class="card ${array[i]} card_block"></div>`;
    }
    for (let i = 0; i < array.length; i++) {
        wrapper.innerHTML += `<div class="card ${array[i]} card_block"></div>`;
    }
}