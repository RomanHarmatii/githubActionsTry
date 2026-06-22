import { expect } from "@playwright/test";

export default class {
  constructor(page) {
    this._page = page;
  }

  async checkVisibility(element) {
    await expect(element).toBeVisible();
  }
}
