import http from 'http';
var port = 7953;
import fs from 'fs';

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("Hello World");
    res.end();
    if (req.method = "GET") {
        console.log("Get success")
        fs.writeFileSync('test.txt', 'Hallo vom GETTT');
    }
}).listen(port);