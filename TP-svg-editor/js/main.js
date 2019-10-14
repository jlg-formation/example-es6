import { DrawingBoard } from './DrawingBoard.js';
import { Line } from './widget/Line.js';

const drawingBoard = new DrawingBoard('.board');
const addLine = () => drawingBoard.prepareForInsert(new Line(drawingBoard));

document.querySelector('button.addLine').addEventListener('click', addLine);
document.querySelector('button.clean').addEventListener('click', drawingBoard.clean.bind(drawingBoard));