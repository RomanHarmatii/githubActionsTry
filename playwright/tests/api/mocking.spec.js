import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("Basic api tests", async () => {
  test("api test", async ({ page, request }) => {
    await page.route("https://qauto.forstudy.space/api/cars", async (route) => {
      await route.fulfill({
        json: {
          status: "ok",
          data: [
            {
              id: 529292,
              carBrandId: 1,
              carModelId: 1,
              initialMileage: 111,
              updatedMileageAt: "2026-06-15T17:54:45.000Z",
              carCreatedAt: "2026-06-15T17:54:45.000Z",
              mileage: 111,
              brand: "volvo",
              model: "TT",
              logo: "bmw.png",
            },
          ],
        },
      });
    });

    await page.goto("https://qauto.forstudy.space");

    const email = "Boris.Macejkovic60@yahoo.com";
    const password = "Q!1wcjUIrK";

    await page.locator(".btn-outline-white.header_signin").click();
    await page.locator("#signinEmail").fill(email);
    await page.locator("#signinPassword").fill(password);

    // await expect(
    //   page.locator(".modal-content .btn.btn-primary"),
    // ).not.toHaveAttribute("disabled");

    // await expect(page.locator(".modal-content .btn.btn-primary")).toBeEnabled();

    // await page.waitForTimeout(1000);

    await page.locator(".modal-content .btn.btn-primary").click();

    await expect(page.locator(".panel-layout .btn-primary")).toHaveText(
      "Add car",
    );

    await expect(page.locator(".car-group")).toContainText("volvo");

    // await page.waitForTimeout(1000);

    // await page.locator(".modal-content .btn.btn-primary").click();

    // expect(await page.url()).toContain("/panel/garage");
  });
});
