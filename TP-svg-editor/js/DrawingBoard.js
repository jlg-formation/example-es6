import { SVGUtils } from "./misc/svg-utils.js";
import { EditionPoint } from "./EditionPoint.js";

export const MODE = Object.freeze({
    DEFAULT: 'default',
    WIDGET_INSERT: 'widget-insert',
    WIDGET_EDITING: 'widget-editing'
});

export class DrawingBoard {

    constructor(selector) {
        this.elt = document.querySelector(selector);
        this.elt.classList.add('drawing-board');
        this.elt.innerHTML = '<svg></svg>';
        this.svg = this.elt.querySelector('svg');
        this.content = SVGUtils.addGroup(this.svg, 'content');
        this.selectable = SVGUtils.addGroup(this.svg, 'selectable');
        this.edition = SVGUtils.addGroup(this.svg, 'edition');
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

    prepareForInsert(widget) {
        console.log('widget: ', widget);
        this.setMode(MODE.WIDGET_INSERT);
        console.log('this', this);
        this.widget = widget;
    }

    select(widget) {
        this.setMode(MODE.WIDGET_EDITING);
        this.widget = widget;
        this.widget.select();
    }

    onClick(event) {
        console.log('onClick', this, arguments);
        if (this.mode === MODE.WIDGET_INSERT) {
            this.widget.depose(event);
            this.setMode(MODE.WIDGET_EDITING);
            this.widget.select();
            return;
        }
        if (this.mode === MODE.WIDGET_EDITING) {
            this.widget.unselect();
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

    getEditionPointElt(label) {
        const result = this.edition.querySelector(`g.${label} circle`);
        console.log('result: ', result);
        return result;
    }

    clean() {
        SVGUtils.removeAllChildren(this.edition);
        SVGUtils.removeAllChildren(this.content);
    }

    removeAllEditionPoint() {
        SVGUtils.removeAllChildren(this.edition);
    }

    selectFromClickEvent(widget) {
        return event => {
            event.stopPropagation();
            console.log('select');
            this.select(widget);
        }
    }

}