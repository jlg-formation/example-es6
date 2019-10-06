import { SVGUtils } from "./misc/svg-utils.js";

export const MODE = Object.freeze({
    DEFAULT: 'default',
    WIDGET_SELECTED: 'widget-selected',
    WIDGET_EDITING: 'widget-editing'
});

function createEditionPoint(x, y) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttribute('r', 3);
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('fill', 'white');
    circle.setAttribute('stroke', 'black');
    return circle;
}

export class DrawingBoard {
    constructor(selector) {
        this.elt = document.querySelector(selector);
        this.elt.classList.add('drawing-board');
        this.elt.innerHTML = '<svg><g class="content"><circle r="50" cx="100" cy="200"></g><g class="edition"></g></svg>';
        this.svg = this.elt.querySelector('svg');
        this.content = this.svg.querySelector('.content');
        this.edition = this.svg.querySelector('.edition');
        console.log('Drawing Board', this);
        this.mode = MODE.DEFAULT;
        this.svg.addEventListener('click', this.onClick.bind(this));
        this.widget = null;
    }

    setMode(mode) {
        this.mode = mode;
        for (const value of Object.values(MODE)) {
            console.log('value: ', value);
            this.elt.classList.remove(value);
        }
        this.elt.classList.add(mode);
    }

    select(widget) {
        console.log('widget: ', widget);
        this.setMode(MODE.WIDGET_SELECTED);
        console.log('this', this);
        this.widget = widget;
    }

    onClick(event) {
        console.log('onClick', this, arguments);
        if (this.mode === MODE.WIDGET_SELECTED) {
            this.widget.depose(event);
            this.setMode(MODE.DEFAULT);
        }
    }

    append(elt) {
        this.content.appendChild(elt);
    }

    setEditionMode() {
        SVGUtils.removeAllChildren(this.edition);
    }

    addEditionPoint(label, x, y) {
        console.log('add edition point');
        const circle = createEditionPoint(x, y);
        this.edition.appendChild(circle);
    }

    clean() {
        SVGUtils.removeAllChildren(this.edition);
        SVGUtils.removeAllChildren(this.content);
    }
}