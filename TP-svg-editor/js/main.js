import { DrawingBoard } from './DrawingBoard.js';
import { Line } from './widget/Line.js';




const drawingBoard = new DrawingBoard('.board');

window.addLine = function () {
    console.log('addLine', arguments, this);
    drawingBoard.select(new Line());
}
document.querySelector('button.addLine').addEventListener('click', addLine);