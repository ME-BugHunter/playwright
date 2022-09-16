const {chromium} = require("playwright");

(async() => {
//launchihng browser
const browser = await chromium.launch({headless: false, slowMo:100});
//creating a page inside the browser
const page = await browser.newPage();
//navigating to site
await page.goto("https://www.facebook.com/");
//accepts cookies popup
await page.click("text=Only allow essential cookies");

await page.click("id=email");
await page.keyboard.type("Let's try something new");

await page.keyboard.down("Shift");
for(let i=0; i< " something new".length; i++){
    await page.keyboard.press("ArrowLeft");
}
await page.keyboard.up("Shift");
await page.keyboard.press("Backspace");
await page.keyboard.type(" bungee jumping");
await browser.close();
})();