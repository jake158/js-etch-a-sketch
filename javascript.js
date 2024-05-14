"use strict";
const board = document.querySelector('#board');
const boardSize = 900;
board.setAttribute('style', `width: ${boardSize}px; height: ${boardSize}px;`);

const button = document.querySelector('button');
button.addEventListener('click', changeGridSize);


function createGrid(size) {
    const boxSize = boardSize / size;
    for (let i = 0; i < Math.pow(size, 2); i++) {
        let box = document.createElement('div');
        box.setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px;`);
        box.addEventListener('mouseover', onBoxHover);
        board.appendChild(box);
    }
}

function clearGrid() {
    board.innerHTML = '';
}

let currentColorIndex = 0;
function rainbowColor() {
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    const color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    return color;
}

function onBoxHover(event) {
    const rainbowMode = document.querySelector('input');
    if (rainbowMode.checked) {
        event.target.style.backgroundColor = rainbowColor();
    }
    else {
        event.target.style.backgroundColor = "black";
    }
}

function changeGridSize() {
    let newSize = prompt("Enter size between 1 and 100:");
    if (newSize != null && newSize >= 1 && newSize <= 100) {
        clearGrid();
        createGrid(newSize);
    }
    else {
        alert("Invalid value");
    }
}

createGrid(32);
