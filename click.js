const {chromium} = require('playwright');

(async() => {
    //function code
    const browser = await chromium.launch({ headless: false, slowMo: 300})
    const page = await browser.newPage();
    await page.goto("https://www.apronus.com/music/lessons/unit01.htm");
    //using default selector
    await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button > sub");
    await page.click("#t1 > table > tr:nth-child(3) > td:nth-child(1) > button");
    //using XPath selector
    await page.click("//html//body//div[3]//table/tr[2]//td[3]//button//sub");
    await browser.close();
})();
