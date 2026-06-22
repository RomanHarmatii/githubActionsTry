import BasePage from "./BasePage";

export default class extends BasePage {
  constructor(page) {
    super(page);
  }

  get thankYouMessage() {
    return this._page.locator('[data-test="complete-header"]');
  }
}
