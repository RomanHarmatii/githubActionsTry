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

Expected substring: "https://www.saucedemo.com//"
Received string:    "https://www.saucedemo.com/"
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