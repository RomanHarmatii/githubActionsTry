import { test } from "@playwright/test";
import LoginPage from "../helpers/POM/LoginPage.js";

test.describe("Sauce Demo Login", () => {
  test("Valid login with standard_user", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();
    await loginPage.expectUsernameVisible();
    await loginPage.expectPasswordVisible();
    await loginPage.expectLoginButtonVisible();

    await loginPage.enterUsername("standard_user");
    await loginPage.expectUsernameValue("standard_user");

    await loginPage.enterPassword("secret_sauce");
    await loginPage.expectPasswordValue("secret_sauce");

    await loginPage.clickLoginButton();
    await loginPage.expectProductsPageOpened();
  });
});
