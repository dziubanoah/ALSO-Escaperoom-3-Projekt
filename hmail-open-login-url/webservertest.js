import http from "http";
import fs from "fs";

http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('my.html').pipe(res);
    } else {
        res.writeHead(404).end();
    }
}).listen(12220);