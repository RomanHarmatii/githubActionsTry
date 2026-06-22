import BaseElement from "./BaseElement";

export default class extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  click() {
    return this.element.click();
  }
}
