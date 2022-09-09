const {firefox} = require('playwright');

(async() => {
//launching browser
const browser = await firefox.launch({headless:false, slowMo:600});
//creating a page inside the browser
const page = await browser.newPage();
//navigating to site
await page.goto("https://www.w3schools.com/howto/howto_css_custom_checkbox.asp");
//accepts cookies popup
await page.click("#accept-choices");
//check the second checkbox
const checks = await page.$$("#main > div.w3-row > div:nth-child(1) > input[type=checkbox]");
await checks[0].uncheck();
await checks[1].check();
//select the second radio button
const buttons = await page.$$("#main > div.w3-row > div:nth-child(1) > input[type=radio]");
await buttons[1].check();
//closing the browser
await browser.close();
})();
