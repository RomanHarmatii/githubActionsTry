# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login test suite >> Try to log in with empty password
- Location: playwright\tests\login.spec.js:19:3

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "https://example.cypress.io/commands/querying/"
Received string:    "https://www.saucedemo.com/"
```

```
Error: expect.toHaveText: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - generic [ref=e10]:
        - textbox "Username" [ref=e11]: standard_user
        - img [ref=e12]
      - generic [ref=e14]:
        - textbox "Password" [ref=e15]
        - img [ref=e16]
      - 'heading "Epic sadface: Password is required" [level=3] [ref=e19]':
        - button [ref=e20] [cursor=pointer]:
          - img [ref=e21]
        - text: "Epic sadface: Password is required"
      - button "Login" [active] [ref=e23] [cursor=pointer]
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "Accepted usernames are:" [level=4] [ref=e27]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e28]:
        - heading "Password for all users:" [level=4] [ref=e29]
        - text: secret_sauce
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
  22 |     await loginPage.usernameField.type("standard_user");
  23 |     await loginPage.loginButton.click();
> 24 |     await expect(loginPage.errorMessage).toHaveText(
     |                                          ^ Error: expect.toHaveText: Target page, context or browser has been closed
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