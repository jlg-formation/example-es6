import { SVGUtils } from "./misc/svg-utils.js";
import { EditionPoint } from "./EditionPoint.js";

export const MODE = Object.freeze({
    DEFAULT: 'default',
    WIDGET_SELECTED: 'widget-selected',
    WIDGET_EDITING: 'widget-editing'
});

export class DrawingBoard {
    constructor(selector) {
        this.elt = document.querySelector(selector);
        this.elt.classList.add('drawing-board');
        this.elt.innerHTML = '<svg><g class="content"><circle r="50" cx="100" cy="200"></g><g class="edition"></g></svg>';
        this.svg = this.elt.querySelector('svg');
        this.content = this.svg.querySelector('.content');
        this.edition = this.svg.querySelector('.edition');
        this.mode = MODE.DEFAULT;
        this.svg.addEventListener('click', this.onClick.bind(this));
        this.selectedWidget = null;
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
        this.selectedWidget = widget;
    }

    onClick(event) {
        console.log('onClick', this, arguments);
        if (this.mode === MODE.WIDGET_SELECTED) {
            this.selectedWidget.depose(event);
            this.setMode(MODE.WIDGET_EDITING);
            return;
        }
        if (this.mode === MODE.WIDGET_EDITING) {
            this.selectedWidget.unselect();
            this.setMode(MODE.DEFAULT);
            return;
        }
    }

    append(elt) {
        this.content.appendChild(elt);
    }

    addEditionPoint(label, x, y, onClickFn) {
        console.log('add edition point');
        const circle = (new EditionPoint(x, y, label, onClickFn)).getGroup();
        this.edition.appendChild(circle);
    }

    clean() {
        SVGUtils.removeAllChildren(this.edition);
        SVGUtils.removeAllChildren(this.content);
    }

    removeAllEditionPoint() {
        SVGUtils.removeAllChildren(this.edition);
    }
}