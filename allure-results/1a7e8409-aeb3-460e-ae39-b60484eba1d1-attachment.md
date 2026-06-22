# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login test suite >> Try to log in with empty password
- Location: playwright\tests\login.spec.js:19:3

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Invalid url: "/"
Call log:
  - navigating to "/", waiting until "load"

```

```
Error: locator.type: Test ended.
Call log:
  - waiting for locator('#user-name')

```

# Test source

```ts
  1  | import CartPage from "../helpers/Page Objects/CartPage";
  2  | import LoginPage from "../helpers/Page Objects/LoginPage";
  3  | import { test, expect } from "@playwright/test";
  4  | 
  5  | test.describe("Login test suite", () => {
  6  |   test.beforeEach(({ page }) => {
  7  |     const loginPage = new LoginPage(page);
  8  | 
  9  |     loginPage.navigate();
  10 |   });
  11 | 
  12 |   test("Login with valid credentials", async ({ page }) => {
  13 |     const loginPage = new LoginPage(page);
  14 | 
  15 |     await loginPage.login("standard_user", "secret_sauce");
  16 | 
  17 |     await loginPage.containUrlCheck("/inventory");
  18 |   });
  19 |   test("Try to log in with empty password", async ({ page }) => {
  20 |     const loginPage = new LoginPage(page);
  21 | 
> 22 |     await loginPage.usernameField.type("standard_user");
     |                                   ^ Error: locator.type: Test ended.
  23 |     await loginPage.loginButton.click();
  24 |     await expect(loginPage.errorMessage).toHaveText(
  25 |       "Epic sadface: Password is required",
  26 |     );
  27 |   });
  28 | 
  29 |   test("Test", async ({ page }) => {
  30 |     const loginPage = new LoginPage(page);
  31 |     const cartPage = new CartPage(page);
  32 | 
  33 |     await loginPage.login("standard_user", "secret_sauce");
  34 |     await cartPage.navigate();
  35 |     
  36 |   });
  37 | });
  38 | 
```