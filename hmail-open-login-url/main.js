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
    try {
        const browser = await puppeteer.launch({ headless: true }); // headless für unsichtbaren Browser
        const page = await browser.newPage();

        await page.goto('https://developer.chrome.com');

        await page.setViewport({ width: 1009, height: 1024 });

        await page.type('.devsite-search-field', 'automate beyond recorder');

        await page.screenshot({ path: 'screenshot.png' });
        console.log("Screenshot gemacht. Überprüfe 'screenshot.png' im Arbeitsverzeichnis.");

        await browser.close();
    } catch (error) {
        console.error("Fehler bei der Puppeteer-Ausführung:", error);
    }
}




//!WICHTIG!, damit das Script auf der ECMAScript "Engine" und nicht auf CommonJS läuft (was für eine ".js" üblich währe) muss eine package.json
//mit dem wert "type": "module" konfiguriert werden. ISt das nicht der fall, wird die JS datei noch als CommonJS ausgeführt