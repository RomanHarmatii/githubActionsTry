export default class {
  constructor(selector, text) {
    this.element = text ? cy.contains(selector, text) : cy.get(selector);
  }

  checkText(expectedText) {
    this.element.should("have.text", expectedText);
  }

  within(callback) {
    this.element.within(callback);
  }
}
