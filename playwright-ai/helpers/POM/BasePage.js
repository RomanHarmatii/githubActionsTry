import { expect } from "@playwright/test";

export default class BasePage {
  constructor(page, url) {
    this._page = page;
    this._url = url;
  }

  async navigate() {
    await this._page.goto(this._url);
    await this.containUrlCheck(this._url);
  }

  async containUrlCheck(expectedUrl) {
    await expect(this._page.url()).toContain(expectedUrl);
  }
}
