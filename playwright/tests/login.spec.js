import CartPage from "../helpers/Page Objects/CartPage";
import LoginPage from "../helpers/Page Objects/LoginPage";
import { test, expect } from "@playwright/test";

test.describe("Login test suite", () => {
  test.beforeEach(({ page }) => {
    const loginPage = new LoginPage(page);

    loginPage.navigate();
  });

  test("Login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login("standard_user", "secret_sauce");

    await loginPage.containUrlCheck("/inventory");
  });
  test("Try to log in with empty password", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.usernameField.type("standard_user");
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Password is required",
    );
  });

  test("Test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);

    await loginPage.login("standard_user", "secret_sauce");
    await cartPage.navigate();
    
  });
});
