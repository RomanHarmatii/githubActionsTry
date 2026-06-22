import InventoryPage from "../helpers/Page Objects/InventoryPage";
import LoginPage from "../helpers/Page Objects/LoginPage";

describe("Footer tests", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  beforeEach(() => {
    loginPage.navigate();
    // console.log(Cypress.env("USERNAME"));
    // loginPage.login(process.env.USERNAME, "secret_sauce");
  });

  it("Facebook redirect test", () => {
    inventoryPage.footer.checkVisibility(inventoryPage.footer.footer);
    inventoryPage.footer.faceBookButton.invoke("removeAssttr", "target").click();
    inventoryPage.containUrlCheck("facebook");
  });
});
