import { SVGUtils } from "./misc/svg-utils.js";
import { EditionPoint } from "./EditionPoint.js";

export const MODE = Object.freeze({
  DEFAULT: 'default',
  WIDGET_INSERT: 'widget-insert',
  WIDGET_SELECTED: 'widget-selected',
  WIDGET_EDITING: 'widget-editing',
});

// custom template
const printMode = (strings, mode) => {
  return strings[0] + mode.toUpperCase();
};

const nothingImplemented = () => console.log('nothing implemented');

export class DrawingBoard {

  constructor(selector) {
    this.elt = document.querySelector(selector);

    // we add drawing-board class in order to let the DrawingBoard.css file to be applied.
    this.elt.classList.add('drawing-board');

    // initializing to SVG and mode DIV.
    this.elt.innerHTML = '<svg></svg><div class="mode"></div>';
    this.svg = this.elt.querySelector('svg');

    // adding 3 groups for the editor :
    this.content = SVGUtils.addGroup(this.svg, 'content'); // where the real SVG stuff are
    this.selectable = SVGUtils.addGroup(this.svg, 'selectable'); // the selection areas
    this.edition = SVGUtils.addGroup(this.svg, 'edition'); // where the edition points will be


    this.mode = MODE.DEFAULT;
    this.svg.addEventListener('click', this.onClick.bind(this));
    this.widget = null;
  }


  /**
   * val must be a MODE.xxx constant
   *
   * @memberof DrawingBoard
   */
  set mode(val) {
    this._mode = val;
    Object.values(MODE).forEach(v => this.elt.classList.remove(v));
    this.elt.classList.add(val);
    this.elt.querySelector('.mode').innerHTML = printMode`Actual Mode is ${this._mode}`;
  }

  get mode() {
    return this._mode;
  }

  prepareForInsert(widget) {
    this.mode = MODE.WIDGET_INSERT;
    this.widget = widget;
  }

  select(widget) {
    this.mode = MODE.WIDGET_SELECTED;
    this.widget = widget;
    this.widget.select();
  }

  onClick(event) {
    if (this.mode === MODE.WIDGET_INSERT) {
      this.widget.depose(event);
      this.mode = MODE.WIDGET_SELECTED;
      this.widget.select();
      return;
    }
    if (this.mode === MODE.WIDGET_SELECTED) {
      this.widget.unselect();
      this.mode = MODE.DEFAULT;
      return;
    }
    if (this.mode === MODE.WIDGET_EDITING) {
      this.mode = MODE.WIDGET_SELECTED;
      return;
    }
  }

  append(elt) {
    this.content.appendChild(elt);
  }

  addEditionPoint(label, x, y, onClickFn = nothingImplemented) {
    const group = (new EditionPoint(x, y, label, onClickFn)).group;
    this.edition.appendChild(group);
  }

  getEditionPointElt(label) {
    return this.edition.querySelector(`g.${label} circle`);
  }

  clean() {
    SVGUtils.removeAllChildren(this.content);
    SVGUtils.removeAllChildren(this.selectable);
    SVGUtils.removeAllChildren(this.edition);
  }

  removeAllEditionPoint() {
    SVGUtils.removeAllChildren(this.edition);
  }

  selectFromClickEvent(widget) {
    return event => {
      event.stopPropagation();
      this.select(widget);
    }
  }

}
