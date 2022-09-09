const {chromium} = require("playwright");

(async() => {
//launchihng browser
const browser = await chromium.launch();
//creating a page inside the browser
const page = await browser.newPage();
//navigating to site
await page.goto("https://www.facebook.com/");
//print the element state

const username = await page.$("#email");
const password = await page.$("#pass");
const loginButton = await page.$("#u_0_c_n2");

console.log(await username.isEditable());
console.log(await password.isVisible());
console.log(await loginButton.isVisible());


//closing the browser
await browser.close();
})();