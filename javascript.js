"use strict";

const board = document.querySelector('#board');
const button = document.querySelector('button');
const boardSize = 900;
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

let currentColorIndex = 0;

// Initialize board
board.setAttribute('style', `width: ${boardSize}px; height: ${boardSize}px;`);
createGrid(32);

function rainbowColor() {
    const color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    return color;
}

function createGrid(size) {
    const boxSize = boardSize / size;
    for (let i = 0; i < size * size; i++) {
        let box = document.createElement('div');
        box.setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px;`);
        box.addEventListener('mouseover', onBoxHover);
        board.appendChild(box);
    }
}

function clearGrid() {
    board.innerHTML = '';
}

function onBoxHover(event) {
    const rainbowMode = document.querySelector('input[type="checkbox"]');
    event.target.style.backgroundColor = rainbowMode.checked ? rainbowColor() : "black";
}

function changeGridSize() {
    let newSize = prompt("Enter size between 1 and 100:");
    if (newSize != null && newSize >= 1 && newSize <= 100) {
        clearGrid();
        createGrid(parseInt(newSize));
    } else {
        alert("Invalid value");
    }
}

button.addEventListener('click', changeGridSize);
