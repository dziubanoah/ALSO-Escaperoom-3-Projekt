import http from 'http';
var port = 7953;
import fs from 'fs';
var date = new Date();

http.createServer(function(req, res) {
    // Setzt den CORS header.
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("GUI for Log Server");
    res.end();
    let body = "";
    req.on("data", chunk => body += chunk); //empfängt und verarbeitet die Daten, in die Variable body.
    req.on("end", () => {
        if (req.method == "POST") {
            console.log("POST req success" + " " + body);
            //fs.appendFileSync("test.txt", "Hallo es gettet\n");
        } 
    })

}).listen(port);