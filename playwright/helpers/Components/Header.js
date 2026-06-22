import BaseComponent from "./BaseComponent";

export default class extends BaseComponent {
  constructor(page) {
    super(page);
  }
  get header() {
    return this._page.locator("[data-test='primary-header']");
  }
  get shoppingCart() {
    return this._page.locator('[data-test="shopping-cart-link"]');
  }

  get shoppingCartBadge() {
    return this.shoppingCart.locator('[data-test="shopping-cart-badge"]');
  }
}
