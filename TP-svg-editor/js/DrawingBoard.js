export const MODE = Object.freeze({
    DEFAULT: 'default',
    WIDGET_SELECTED: 'widget-selected',
    WIDGET_EDITING: 'widget-editing'
});

export class DrawingBoard {
    constructor(selector) {
        this.elt = document.querySelector(selector);
        this.elt.classList.add('drawing-board');
        this.elt.innerHTML = '<svg><circle r="50" cx="100" cy="200"></svg>';
        this.svg = this.elt.querySelector('svg');
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
            this.widget.depose(this, event);
        }
    }

    append(elt) {
        this.svg.appendChild(elt);
    }
}