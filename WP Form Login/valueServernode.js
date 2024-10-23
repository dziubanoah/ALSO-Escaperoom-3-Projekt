let http = require("http");

// Erstelle den Server
http.createServer(function(request, response) {
    // CORS-Header setzen, um Anfragen von anderen Ursprüngen zu erlauben
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type", "application/json"); // Tippfehler korrigiert

    // Überprüfen, ob die Anfrage eine POST-Anfrage ist
    if (request.method === 'POST') {
        let body = '';

        // Daten aus dem Request-Body sammeln
        request.on('data', chunk => {
            body += chunk.toString(); // Daten in String umwandeln
        });

        // Sobald die gesamte Anfrage eingegangen ist
        request.on('end', () => {
            console.log('Received:', body); // Eingehende Daten ausgeben
            response.end(JSON.stringify({ message: 'Daten empfangen!', receivedData: body })); // Antwort mit den empfangenen Daten
        });
    } else {
        // Wenn die Anfrage nicht POST ist
        response.statusCode = 405; // Method Not Allowed
        response.end(JSON.stringify({ message: 'Nur POST-Anfragen sind erlaubt.' }));
    }
}).listen(187, () => {
    console.log('Server läuft auf http://localhost:187');
});
