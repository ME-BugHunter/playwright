const {chromium} = require("playwright");

(async() => {
    const browser = await chromium.launch({headless: false, slowMo: 100});

    const context = await browser.newContext({
        recordVideo:{
        dir: "./recordings"
        }
    });
    const page = await context.newPage();
    await page.goto("https://www.fashiondays.bg/");
    await page.waitForTimeout(1000);
    await browser.close();

})