import InventoryPage from "../helpers/Page Objects/InventoryPage";
import LoginPage from "../helpers/Page Objects/LoginPage";

describe("Sorting testing", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  beforeEach(() => {
    loginPage.navigate();
    loginPage.login("standard_user", "secret_sauce");
  });

  it("A-Z sorting check", () => {
    // let array = [];

    // inventoryPage.sortingDropdown.select("Name (Z to A)");

    // inventoryPage.productsNames.each((element) => {
    //   const text = element.text();
    //   array.push(text);
    // });

    // const array = ['b', 'c', 'a'];
    // array.sort();
    // console.log(array);

    // console.log("Before", array);
    // const newString = array.join(",");
    // console.log("Join", newString);
    // array.sort();
    // console.log("Sort", array);

    // .invoke("text").then((text) => {
    //   textBefore = text;
    // });

    // inventoryPage.sortingDropdown.select("Name (Z to A)");

    // inventoryPage.productsNames.invoke("text").then((text) => {
    //   expect(text).to.not.equal(textBefore);
    // });
  });
});
