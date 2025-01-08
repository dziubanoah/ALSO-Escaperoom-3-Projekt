<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 31536000");

if (isset($_POST['inputValue'])) {
    $inputname = $_POST['inputValue'];
    file_put_contents('log.txt', date('Y-m-d H:i:s') . " - Empfangen: " . $inputname . PHP_EOL, FILE_APPEND);
} else {
    file_put_contents('log.txt', date('Y-m-d H:i:s') . " - Fehler: 'inputValue' nicht gefunden" . PHP_EOL, FILE_APPEND);
}
echo"Log script works" + $inputname;
?>