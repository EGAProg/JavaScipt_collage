export function drawGameObjects(array, wrapper) {
    
    for (let i = 0; i < array.length; i++) {
        wrapper.innerHTML += `<div class="card card_block ${array[i]}"></div>`;
    }
    for (let i = 0; i < array.length; i++) {
        wrapper.innerHTML += `<div class="card card_block ${array[i]}"></div>`;
    }
}