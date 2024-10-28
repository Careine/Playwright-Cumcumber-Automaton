const { Before, After, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;
let context;
let page;

// Set default timeout to 60 seconds
setDefaultTimeout(60 * 1000);

BeforeAll(async () => {
  // Launch browser before running any tests
  browser = await chromium.launch({ headless: false }); // Use headless: true for headless mode
});

Before(async () => {
  // Create new browser context and page before each scenario
  context = await browser.newContext();
  page = await context.newPage();
  // Expose the page to the scenario world for reuse in step definitions
  global.page = page;
});

After(async () => {
  // Close the page after each scenario
  await page.close();
  await context.close();
});

AfterAll(async () => {
  // Close the browser after all tests are done
  await browser.close();
});
