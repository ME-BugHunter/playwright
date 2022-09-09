const {chromium} = require("playwright");

(async() => {
//launchihng browser
const browser = await chromium.launch({headless: false, slowMo:100});
//creating a page inside the browser
const page = await browser.newPage();
//navigating to site
await page.goto();
//closing the browser
await browser.close();
})();