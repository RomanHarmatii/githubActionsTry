import BaseElement from "../Elements/BaseElement";
import Button from "../Elements/Button";
import BasePage from "./BasePage";

export default class extends BasePage {
  cardItem(itemName) {
    return new BaseElement(".inventory_item_description", itemName);
  }

  get button() {
    return new Button("button");
  }

  get sortingDropdown() {
    return cy.get('[data-test="product-sort-container"]');
  }

  get productsNames() {
    return cy.get('[data-test="inventory-item-name"]');
  }
}
