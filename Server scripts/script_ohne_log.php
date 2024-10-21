<?php
// erlaubt cors
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 31536000");  // Speichert die CORS-Erlaubnis auf 1 Jahr (Für immer nich möglich)

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $jarFile = 'main.jar';
    echo "Bankserver ist erreichbar - ";

    if (file_exists($jarFile)) {
        $command = "start javaw -jar " . escapeshellarg($jarFile);
        pclose(popen($command, "r"));

        echo "Anfrage angenommen und .jar-Datei gestartet.";
    } else {
        echo "Die Datei wurde nicht gefunden.";
    }
} else {
    echo "Nur GET-Anfragen werden akzeptiert.";
}
?>
