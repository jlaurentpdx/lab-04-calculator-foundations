import { add, sub } from './calculations.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addResult = document.getElementById('add-result');
const addButton = document.getElementById('add-button');

const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subResult = document.getElementById('sub-result');
const subButton = document.getElementById('sub-button');

const multInput1 = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multResult = document.getElementById('mult-result');
const multButton = document.getElementById('mult-button');

addButton.addEventListener('click', ()=> {
    const x = Number(addInput1.value); 
    const y = Number(addInput2.value); 
    const result = add(x, y);

    addResult.textContent = result;
});

subButton.addEventListener('click', ()=> {
    const x = Number(subInput1.value);
    const y = Number(subInput2.value);
    const result = sub(x, y);

    subResult.textContent = result;
});

multButton.addEventListener('click', ()=> {
    console.log('mult button clicked');
});

