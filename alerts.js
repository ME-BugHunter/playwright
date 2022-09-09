const {chromium} = require("playwright");

(async() => {
//launchihng browser
const browser = await chromium.launch({headless: false, slowMo:500});
//creating a page inside the browser
const page = await browser.newPage();
//navigating to site
await page.goto("https://www.demoqa.com/alerts"); //currently url is inaccessible
//code to handle the alerts
//before we click any button we need a listener
page.once("dialog", async dialog =>{
    console.log(dialog.message());
    await dialog.accept();
});
await page.click("#confirmButton");

page.once("dialog", async dialog =>{
    console.log(dialog.message());
    await dialog.accept("this is my comment");
});
await page.click("#promptbutton");
//closing the browser
await browser.close();
})();