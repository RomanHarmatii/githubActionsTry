import BaseElement from "./BaseElement";

export default class extends BaseElement {
  constructor(selector) {
    super(selector);
  }
  
  type(text) {
    this.element.type(text);
  }
}
