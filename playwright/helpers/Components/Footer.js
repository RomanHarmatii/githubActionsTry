import BaseComponent from "./BaseComponent";

export default class extends BaseComponent {
  constructor(page) {
    super(page);
  }
  get footer() {
    return this._page.locator("[data-test='footer']");
  }
  get socialButtons() {
    return this._page.locator(".social li a");
  }
  get xButton() {
    return this.socialButtons.nth(0);
  }
  get faceBookButton() {
    return this.socialButtons.nth(1);
  }
  get linkedinButton() {
    return this.socialButtons.nth(2);
  }
}
