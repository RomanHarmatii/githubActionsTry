# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login test suite >> Test
- Location: playwright\tests\login.spec.js:29:3

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "https://example.cypress.io/commands/querying/"
Received string:    "https://www.saucedemo.com/inventory.html"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "https://example.cypress.io/commands/querying/cart.html"
Received string:    "https://www.saucedemo.com/cart.html"
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - generic [ref=e15]: Your Cart
    - generic [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]: QTY
        - generic [ref=e20]: Description
      - generic [ref=e21]:
        - button "Go back Continue Shopping" [ref=e22] [cursor=pointer]:
          - img "Go back" [ref=e23]
          - text: Continue Shopping
        - button "Checkout" [ref=e24] [cursor=pointer]
  - contentinfo [ref=e25]:
    - list [ref=e26]:
      - listitem [ref=e27]:
        - link "Twitter" [ref=e28] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e29]:
        - link "Facebook" [ref=e30] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e31]:
        - link "LinkedIn" [ref=e32] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e33]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import Footer from "../Components/Footer";
  2  | import { expect } from "@playwright/test";
  3  | import Header from "../Components/Header";
  4  | 
  5  | export default class {
  6  |   _url;
  7  | 
  8  |   constructor(page, url) {
  9  |     this._url = url;
  10 |     this._page = page;
  11 |     this.footer = new Footer(page);
  12 |     this.header = new Header(page);
  13 |   }
  14 | 
  15 |   async navigate() {
  16 |     await this._page.goto(this._url, { waitUntil: "load" });
  17 |     await this.containUrlCheck(`${process.env.BASE_URL}${this._url}`);
  18 |   }
  19 | 
  20 |   async containUrlCheck(expectedUrl) {
> 21 |     await expect(await this._page.url()).toContain(expectedUrl);
     |                                          ^ Error: expect(received).toContain(expected) // indexOf
  22 |   }
  23 | }
  24 | 
```