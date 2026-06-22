import InventoryPage from "../helpers/Page Objects/InventoryPage";
import LoginPage from "../helpers/Page Objects/LoginPage";
import { test, expect } from "@playwright/test";

test.describe("Footer tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    console.log(process.env.USERNAME1);

    await loginPage.login("standard_user", "secret_sauce");
  });

  test("Facebook redirect test", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await expect(await page.locator('[data-test="footer"]')).toBeVisible();

    await inventoryPage.footer.faceBookButton.evaluate((element) => {
      element.removeAttribute("target");
    });
    await inventoryPage.footer.faceBookButton.click();
    await inventoryPage.containUrlCheck("facebook");
  });
});
