import fs from "fs";
import open from "open";
import puppeteer from "puppeteer"; //Import für das Paket puppeteer.
let runScript = true;

fs.watch('C:/Program Files (x86)/hMailServer/Data/schulinski.onmicrosoft.com/Silke.Friedmann', (eventType, filename) => {
    console.log(eventType);
    console.log(filename);
    if (eventType == 'rename' && runScript == true) {
        console.log("Wauuu")
        runbrowser();
        runScript = false;
        return "Done"
    }
});

async function runbrowser () {
    console.log("runbrowser function klappt.");
    const browser = await puppeteer.launch({ headless: false}); //sorgt dafür dass es nicht Headless passiert (Browser könnten bei true Meckern)
    const page = await browser.newPage();
    await page.goto('http://192.168.66.54:5555/login.html'); //Zu öffnende Seite
    await page.type('#user_login', 'testatdomain.xyz'); //Schreibt die Addresse testatdomain.xyz in das Feld mit der ID user_login
    await page.type('#user_pass', 'testxyz'); //Schreibt testxyz in das feld: user_pass.
    waitUntil();
    await page.click('#wp-submit'); //Bestätigt die Eingabe mit einem Klick. ist bei black eye von seite zu seit unterschiedlich.
    //await page.waitForTimeout(5000); // nicht unterstützt für jede Version von puppeteer. Wartet einfach 5 Sekunden, bevor der screenshot gemacht wird
    await page.screenshot({ path: 'login_verification.png' }); //macht einen screenshot zum proof und legt die Datei im selben verzeichniss ab.
    await browser.close(); //Schließt den Browser. Ohne währe das script false.
}

function waitUntil () {
        let i = 0;
    console.time();
    while(i < 100000){
        console.log(i);
        i++;
    }
    console.timeEnd();
}


//!WICHTIG!, damit das Script auf der ECMAScript "Engine" und nicht auf CommonJS läuft (was für eine ".js" üblich währe) muss eine package.json
//mit dem wert "type": "module" konfiguriert werden. ISt das nicht der fall, wird die JS datei noch als CommonJS ausgeführt