import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("Basic api tests", async () => {
  test("api test", async ({ request }) => {
    const email = faker.internet.email();
    const password = faker.internet.password({ length: 10, prefix: "Q!1w" });
    console.log(password);
    const responseSignUp = await request.post(
      "https://qauto.forstudy.space/api/auth/signup",
      {
        data: {
          name: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: email,
          password: password,
          repeatPassword: password,
        },
      },
    );

    expect(responseSignUp.status()).toBe(201);

    const responseSignIn = await request.post(
      "https://qauto.forstudy.space/api/auth/signin",
      {
        data: {
          email: email,
          password: password,
          remember: false,
        },
      },
    );

    expect(responseSignIn.status()).toBe(200);
  });
});
