import InventoryPage from "../helpers/Page Objects/InventoryPage";
import LoginPage from "../helpers/Page Objects/LoginPage";
import { test, expect } from "@playwright/test";

test.describe("Sorting testing", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login("standard_user", "secret_sauce");
  });

  test("Z-A sorting check", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    let array = [];

    for (let i = 0; i < (await inventoryPage.productsNames.count()); i++) {
      let text = await inventoryPage.productsNames.nth(i).innerText();
      array.push(text);
    }

    const sortedArray = array.sort().reverse();

    await inventoryPage.sortingDropdown.selectOption("Name (Z to A)");

    let actualArray = [];

    for (let i = 0; i < (await inventoryPage.productsNames.count()); i++) {
      let text = await inventoryPage.productsNames.nth(i).innerText();
      actualArray.push(text);
    }

    expect(actualArray).toStrictEqual(sortedArray);
  });
});
