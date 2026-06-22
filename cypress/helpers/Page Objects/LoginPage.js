import BaseElement from "../Elements/BaseElement";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import BasePage from "./BasePage";

const url = "/";

export default class extends BasePage {
  constructor() {
    super(url);
  }

  get usernameField() {
    return new Input("#user-name");
  }

  get passwordField() {
    return new Input("#password");
  }

  get loginButton() {
    return new Button("#login-button");
  }

  get errorMessage() {
    return new BaseElement(".error-message-container");
  }

  login(username, password) {
    this.usernameField.type(username);
    this.passwordField.type(password);
    this.loginButton.click();
  }

}
