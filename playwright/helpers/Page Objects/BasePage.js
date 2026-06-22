import Footer from "../Components/Footer";
import { expect } from "@playwright/test";
import Header from "../Components/Header";

export default class {
  _url;

  constructor(page, url) {
    this._url = url;
    this._page = page;
    this.footer = new Footer(page);
    this.header = new Header(page);
  }

  async navigate() {
    await this._page.goto(this._url, { waitUntil: "load" });
    await this.containUrlCheck(`${process.env.BASE_URL}${this._url}`);
  }

  async containUrlCheck(expectedUrl) {
    await expect(await this._page.url()).toContain(expectedUrl);
  }
}
