import { PracticePage } from "./PracticePage";

const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  const page = new PracticePage(driver);
  test("can search stories", async () => {
    await page.navigate();
    await page.searchStories("japan");
    let titles = await page.getStoryTitles();
    expect(titles[0]).toContain("japan");

    
  });
  afterAll(async () => {
    await driver.quit();
  });