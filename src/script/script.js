let row1 = document.getElementById("row_1");
let row2 = document.getElementById("row_2");
let row3 = document.getElementById("row_3");
let row4 = document.getElementById("row_4");
let row5 = document.getElementById("row_5");

const row1_btns = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const row2_btns = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];
const row3_btns = ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
const row4_btns = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'];
const row5_btns = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Win', '...', 'Ctrl'];

// row1 numbers btns 
for (const i of row1_btns) {
    row1.innerHTML += `<button class="btn btn_${i}">${i}</button>`;
}

// row2 top rows btns
for (const i of row2_btns) {
    row2.innerHTML += `<button class="btn btn_${i}">${i}</button>`;
}

// row3 home rows btns 
for (const i of row3_btns) {
    console.log(i);
    row3.innerHTML += `<button class="btn btn_${i}">${i}</button>`;
}

// row4 bottom  rows btns 
for (const i of row4_btns) {
    console.log(i);
    row4.innerHTML += `<button class="btn btn_${i}">${i}</button>`;
}

// row5 last rows btns 
for (const i of row5_btns) {
    console.log(i);
    row5.innerHTML += `<button class="btn btn_${i}">${i}</button>`;
}


