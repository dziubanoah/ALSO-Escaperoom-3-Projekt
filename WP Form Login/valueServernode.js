var qs = require("querystring");

function one (request, response){
    // CORS-Header setzen, um Anfragen von anderen Ursprüngen zu erlauben
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type", "application/json");

    if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;

            if (body.length > 1e6) {
                request.connection.destroy();
            }
        });

        request.on("end", function () {
            var post = qs.parse(body);
        })
    }

}
