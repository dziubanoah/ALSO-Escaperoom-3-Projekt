let http = require("http");

http.createServer(function(request, response){
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Contene-Type", "text/plain");
    response.end();
}).listen(187);
