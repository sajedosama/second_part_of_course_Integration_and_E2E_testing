const puppeteer = require('puppeteer');


async function main() {
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/tests/e2e/mySite.html');
    await page.type('input[id=email]', 'test@email.com');
    await page.type('input[id=password]', 'password');

    await page.screenshot({path: 'tests.png'});
    await new Promise(resolve => setTimeout(resolve, 5000));
    //await page.waitForTimeout(5000); doesn't work


    console.log('5 seconds finished');

    await page.click('input[id=submit]');

    console.log('clicked submit');

    await new Promise(() => {});
}
main().catch(error => console.error(error));