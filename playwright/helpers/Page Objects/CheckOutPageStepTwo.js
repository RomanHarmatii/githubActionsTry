import BasePage from "./BasePage";

export default class extends BasePage {
  constructor(page) {
    super(page);
  }

  cartItem(productName) {
    return this._page.locator('[data-test="inventory-item"]', {
      hasText: productName,
    });
  }

  cartItemPrice(productName) {
    return this.cartItem(productName).locator(
      '[data-test="inventory-item-price"]',
    );
  }

  get finishButton() {
    return this._page.locator('[data-test="finish"]');
  }

  get totalPrice() {
    return this._page.locator('[data-test="total-label"]');
  }
}
