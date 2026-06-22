import { test } from "@playwright/test";

test.describe("Cookies", () => {
  test("Cookies", async ({ context }) => {
    const page = await context.newPage();
    await page.goto("/commands/querying");
    await context.addCookies([
      {
        name: "hello",
        value: "hello2",
        url: "https://example.cypress.io/commands/querying",
      },
    ]);
    console.log(await context.cookies());
  });
});
