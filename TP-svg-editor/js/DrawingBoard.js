import { SVGUtils } from "./misc/svg-utils.js";
import { EditionPoint } from "./EditionPoint.js";

export const MODE = Object.freeze({
  DEFAULT: 'default',
  WIDGET_INSERT: 'widget-insert',
  WIDGET_SELECTED: 'widget-selected',
  WIDGET_EDITING: 'widget-editing',
});

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
    for (const value of Object.values(MODE)) {
      console.log('value: ', value);
      this.elt.classList.remove(value);
    }
    this.elt.classList.add(val);
    this.elt.querySelector('.mode').innerHTML = printMode`Actual Mode is ${this._mode}`;
  }

  get mode() {
    return this._mode;
  }

  prepareForInsert(widget) {
    console.log('widget: ', widget);
    this.mode = MODE.WIDGET_INSERT;
    console.log('this', this);
    this.widget = widget;
  }

  select(widget) {
    this.mode = MODE.WIDGET_SELECTED;
    this.widget = widget;
    this.widget.select();
  }

  onClick(event) {
    console.log('onClick', this, arguments);
    if (this.mode === MODE.WIDGET_INSERT) {
      this.widget.depose(event);
      this.mode = MODE.WIDGET_SELECTED;
      this.widget.select();
      return;
    }
    if (this.mode === MODE.WIDGET_SELECTED) {
      console.log('going to default');
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
      console.log('select');
      this.select(widget);
    }
  }

}
