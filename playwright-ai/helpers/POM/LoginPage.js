import { expect } from "@playwright/test";
import BasePage from "./BasePage.js";

const url = "https://www.saucedemo.com/";

export default class LoginPage extends BasePage {
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

  get pageTitle() {
    return this._page.locator(".title");
  }

  async openLoginPage() {
    await this.navigate();
  }

  async enterUsername(username) {
    await this.usernameField.fill(username);
  }

  async enterPassword(password) {
    await this.passwordField.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async expectUsernameVisible() {
    await expect(this.usernameField).toBeVisible();
  }

  async expectPasswordVisible() {
    await expect(this.passwordField).toBeVisible();
  }

  async expectLoginButtonVisible() {
    await expect(this.loginButton).toBeVisible();
  }

  async expectUsernameValue(value) {
    await expect(this.usernameField).toHaveValue(value);
  }

  async expectPasswordValue(value) {
    await expect(this.passwordField).toHaveValue(value);
  }

  async expectProductsPageOpened() {
    await expect(this.pageTitle).toHaveText("Products");
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
    await this.containUrlCheck("/inventory.html");
  }
}
