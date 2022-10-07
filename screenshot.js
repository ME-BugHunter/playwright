const {chromium} = require("playwright");

(async() => {
const browser = await chromium.launch({headless:false, slowMo:100});
const page = await browser.newPage();
await page.goto("https://testautomationu.applitools.com/");
//take screenshot
await page.screenshot({path: "screenshot.png"});

const logo = await page.$("#app > div.theme-container.no-sidebar > header > a > img");
await logo.screenshot({path: "text.png"});
await page.screenshot({path: "fullpage.png", fullPage: true });

await browser.close();
})();