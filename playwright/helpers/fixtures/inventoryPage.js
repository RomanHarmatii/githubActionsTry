import { test as base } from "@playwright/test";
import LoginPage from "../Page Objects/LoginPage";
import InventoryPage from "../Page Objects/InventoryPage";

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend({
  inventoryPage: async ({ page }, use) => {
    // Set up the fixture.

    await page.setExtraHTTPHeaders({ "user-agent": "hello" });

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
    await loginPage.login(process.env.USERNAME1, "secret_sauce");

    // Use the fixture value in the test.
    await use(inventoryPage);

    console.log("Fixture after");

    // Clean up the fixture.
  },
});
