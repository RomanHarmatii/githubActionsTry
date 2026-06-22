import BasePage from "./BasePage";

const url = "/cart.html";

export default class extends BasePage {
  constructor(page) {
    super(page, url);
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

  get checkoutButton() {
    return this._page.locator('[data-test="checkout"]');
  }
}
