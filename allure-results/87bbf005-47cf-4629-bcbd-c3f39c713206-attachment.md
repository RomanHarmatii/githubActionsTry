# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cookies.spec.js >> Cookies >> Cookies
- Location: playwright\tests\cookies.spec.js:4:3

# Error details

```
Error: page.goto: Protocol error (Playwright.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/commands/querying", waiting until "load"

```

# Test source

```ts
  1  | import { test } from "@playwright/test";
  2  | 
  3  | test.describe("Cookies", () => {
  4  |   test("Cookies", async ({ context }) => {
  5  |     const page = await context.newPage();
> 6  |     await page.goto("/commands/querying");
     |                ^ Error: page.goto: Protocol error (Playwright.navigate): Cannot navigate to invalid URL
  7  |     await context.addCookies([
  8  |       {
  9  |         name: "hello",
  10 |         value: "hello2",
  11 |         url: "https://example.cypress.io/commands/querying",
  12 |       },
  13 |     ]);
  14 |     console.log(await context.cookies());
  15 |   });
  16 | });
  17 | 
```