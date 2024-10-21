<?php
// erlaubt cors
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 31536000");  // Speichert die CORS-Erlaubnis auf 1 Jahr (Für immer nich möglich)

// Logik für das eigentliche Speichern des Kontakts

$logfile = "contacts.txt";

// Überprüfe, ob eine GET-Anfrage gesendet wurde

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Protokolliere den Kontakt in die datei contacts.txt

    $logdaten = "Escaperoom Team - Zeit: " . date('Y-m-d H:i:s') . PHP_EOL;

    file_put_contents($logfile, $logdaten, FILE_APPEND);

    $response = array("message" => "Kontakt gespeichert", "status" => "erfolgreich");
    echo json_encode($response);

} else {
    $response = array("message" => "Nur GET-Anfragen sind erlaubt", "status" => "fehler");
    echo json_encode($response);
}
?>
