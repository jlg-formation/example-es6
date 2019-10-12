import { SVGUtils } from "../misc/svg-utils.js";

export class Line {

    constructor(board) {
        this.board = board;
        this.x1 = undefined;
        this.y1 = undefined;
        this.x2 = undefined;
        this.y2 = undefined;
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

        const selectableLine = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        selectableLine.setAttribute('x1', this.x1);
        selectableLine.setAttribute('x2', this.x2);
        selectableLine.setAttribute('y1', this.y1);
        selectableLine.setAttribute('y2', this.y2);
        selectableLine.setAttribute('stroke', 'transparent');
        selectableLine.setAttribute('stroke-width', '20');
        selectableLine.setAttribute('fill', 'transparent');
        selectableLine.addEventListener('click', event => {
            event.stopPropagation();
            console.log('select');
            this.board.select(this);
        });
        this.board.selectable.appendChild(selectableLine);
    }

    select() {
        // add move point to 2 extremities.
        this.board.removeAllEditionPoint();
        this.board.addEditionPoint('start', this.x1, this.y1, () => {
            console.log('edit start');
        });
        this.board.addEditionPoint('end', this.x2, this.y2, () => {
            console.log('edit end');
        });
    }

    unselect() {
        this.board.removeAllEditionPoint();
    }
}