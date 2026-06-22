import BasePage from "./BasePage";

const url = "/";

export default class extends BasePage {
  constructor(page) {
    super(page, url);
  }

  get usernameField() {
    return this._page.locator("#user-name");
  }

  get passwordField() {
    return this._page.locator("#password");
  }

  get loginButton() {
    return this._page.locator("#login-button");
  }

  get errorMessage() {
    return this._page.locator(".error-message-container");
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
    await this.containUrlCheck("/inventory.html");
  }
}
