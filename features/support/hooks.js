const {After, Before,AfterStep,Status} = require('@cucumber/cucumber');
const playwright = require('@playwright/test');
Before(async function () {
    // This hook will be executed before all scenarios
    console.log("i am first");
    const browser = await playwright.chromium.launch({
      headless: false,
  });
  const context = await browser.newContext();
   const page = await context.newPage();

  // Store on 'this' so it can be accessed in other hooks
  this.browser = browser;
  this.context = context;
  this.page = page;

  const fs = require('fs');

Before(async function () {
  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots');
  }
});
  });

  AfterStep( async function ({result}) {
    // This hook will be executed after all steps, and take a screenshot on step failure
    if (result.status === Status.FAILED) {
      // if want to use timestamp for screeenshot then use below commented else keep the same
      //and if don't want to add in repo then add it in .gitignore file
    // const timestamp = Date.now();
    // const screenshotPath = `screenshots/failure-${timestamp}.png`;
    // const buffer = await this.page.screenshot({ path: screenshotPath });
    // this.attach(buffer.toString('base64'), 'base64:image/png');
    // console.log("Screenshot logged:", screenshotPath);

    const buffer = await this.page.screenshot();
      await this.page.screenshot({ path: 'screenshot1.png' });
      this.attach(buffer.toString('base64'), 'base64:image/png');
      console.log("Screenshot logged")
  }
  });
  After(async function () {
    // Assuming this.driver is a selenium webdriver
    console.log("i am last");
    
  if (this.page) await this.page.close();
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();
    
  });

  
