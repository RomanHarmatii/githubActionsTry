import BasePage from "./BasePage";

export default class extends BasePage {
  constructor(page) {
    super(page);
  }

  cardItem(itemName) {
    return this._page.locator(".inventory_item", {
      hasText: itemName,
    });
  }
  cardItemButton(itemName) {
    return this.cardItem(itemName).locator("button");
  }
  cardItemButtonPrice(itemName) {
    return this.cardItem(itemName).locator(
      "[data-test='inventory-item-price']",
    );
  }
  cardItemButtonImage(itemName) {
    return this.cardItem(itemName).locator("img");
  }
  get sortingDropdown() {
    return this._page.locator('[data-test="product-sort-container"]');
  }

  get productsNames() {
    return this._page.locator('[data-test="inventory-item-name"]');
  }
}
