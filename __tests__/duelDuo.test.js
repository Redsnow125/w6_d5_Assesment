const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

// afterEach(async () => {
//   await driver.quit();
// });

describe("Duel Duo tests", () => {
  // test("page loads with title", async () => {
  //   await driver.get("http://localhost:8000");
  //   await driver.wait(until.titleIs("Duel Duo"), 5000);
  // });
  // test("Draw button test", async () => {
  //   await driver.get("http://localhost:8000");
  //   await driver.wait(until.titleIs("Duel Duo"), 5000);
  //   await driver.findElement(By.id("draw")).click()
  //   await driver.findElement(By.id("choices"))
  // });
  test("Check duos are added button", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 5000);
    await driver.findElement(By.id("draw")).click()
    await driver.findElement(By.className("bot-btn")).click()
    await driver.findElement(By.xpath('//section/div/div/button[text = "Remove from Duo"]'))
  });
});