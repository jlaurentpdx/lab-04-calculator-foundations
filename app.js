import { add } from './calculations.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addResult = document.getElementById('add-result');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', ()=> {
    const x = Number(addInput1.value); 
    const y = Number(addInput2.value); 

    const result = add(x, y);
    addResult.textContent = result;
});
