"use strict";
const board = document.querySelector('#board');
const boardSize = 900;
board.setAttribute('style', `width: ${boardSize}px; height: ${boardSize}px;`);

function createGrid(size) {
    const boxSize = boardSize / size;
    for (let i = 0; i < Math.pow(size, 2); i++) {
        let box = document.createElement('div');
        box.setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px;`);
        box.addEventListener('mouseover', onHover);
        board.appendChild(box);
    }
}

function onHover(event) {
    event.target.style.backgroundColor = "gray";
}

createGrid(32);
