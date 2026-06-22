import BasePage from "./BasePage";

export default class extends BasePage {
  constructor(page) {
    super(page);
  }

  get firstNameField() {
    return this._page.locator('[data-test="firstName"]');
  }
  get lastNameField() {
    return this._page.locator('[data-test="lastName"]');
  }
  get zipCodeField() {
    return this._page.locator('[data-test="postalCode"]');
  }
  get continueButton() {
    return this._page.locator('[data-test="continue"]');
  }
}
