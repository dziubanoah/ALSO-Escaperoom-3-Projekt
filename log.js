document.getElementById('sendRequest').addEventListener('click', function() {
    
    const url = 'http://localhost/contact_log.php';

    // Sende eine GET-Anfrage an das PHP-Skript
    fetch(url, {
        method: 'GET',
    })
    .then(response => response.json()) // Antwort wird als JSON erwartet
    .then(data => {
        // Zeige die Antwort im Browser an
        document.getElementById('responseText').innerText = `Antwort: ${data.message}, Status: ${data.status}`;
        console.log('Erfolg:', data);
    })
    .catch(error => {
        console.error('Fehler:', error);
    });
});

//nich gebraucht in v1.9. Das main script um den Log zu schreiben ist in der script_mit_log.php