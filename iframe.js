const {chromium} = require("playwright");

(async() => {
//launchihng browser
const browser = await chromium.launch({headless: false, slowMo:600});
//creating a page inside the browser
const page = await browser.newPage();
//navigating to site
await page.goto("https://www.w3schools.com/html/html_iframe.asp");
//logic to handle the iframes

const frame1 = await page.frame({name: "__tcfapiLocator"});
const head1 = await frame1.$("head");
console.log(await head1.innerText());
//closing the browser
await browser.close();
})();