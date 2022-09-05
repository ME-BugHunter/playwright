const {chromium} = require('playwright');

(async() => {
    //function code
    const browser = await chromium.launch({ headless: false, slowMo: 100})
    const page = await browser.newPage();
    await page.goto("https://www.facebook.com/");
    const email = await page.$("#email");
    await email.type("mariyakosevaqqqqq@abv.bg", { delay: 50 });
    const password = await page.$("#pass");
    await password.type("thisismyfakepassword", {delay: 50 });
    await browser.close();
})();
