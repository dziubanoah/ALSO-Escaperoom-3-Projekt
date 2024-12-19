import fs from "fs";
import open from "open";
import puppeteer from "puppeteer";

fs.watch('folder123', (eventType, filename) => {
    console.log(eventType);
    console.log(filename);
    if (eventType == 'rename') {
        console.log("Wauuu")
        runbrowser();
    }
});

async function runbrowser () {
    console.log("runbrowser function klappt.");
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.goto('http://localhost:12220/');
    await page.type('#email', 'test@domain.xyz'); 
    await page.type('#PW', 'test');
    await page.click('#submit');
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'login_verification.png' });
    await browser.close();
}




//!WICHTIG!, damit das Script auf der ECMAScript "Engine" und nicht auf CommonJS läuft (was für eine ".js" üblich währe) muss eine package.json
//mit dem wert "type": "module" konfiguriert werden. ISt das nicht der fall, wird die JS datei noch als CommonJS ausgeführt