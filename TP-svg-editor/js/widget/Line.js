import { SVGUtils } from "../misc/svg-utils.js";

export class Line {

    constructor(board) {
        this.board = board;
    }
    depose(event) {
        console.log('event: ', event);
        const {x, y} = SVGUtils.getCoordinates(event);
        this.x1 = x;
        this.y1 = y;
        this.x2 = this.x1 + 100;
        this.y2 = this.y1 + 100;

        const line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute('x1', this.x1);
        line.setAttribute('x2', this.x2);
        line.setAttribute('y1', this.y1);
        line.setAttribute('y2', this.y2);
        line.setAttribute('stroke', 'black');
        this.board.content.appendChild(line);
        this.select();
    }

    select() {
        // add move point to 2 extremities.
        this.board.setEditionMode();
        this.board.addEditionPoint('start', this.x1, this.y1);
        this.board.addEditionPoint('end', this.x2, this.y2);
    }
}