<?php
// erlaubt cors
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 31536000");  // Speichert die CORS-Erlaubnis auf 1 Jahr (Für immer nich möglich)


$team = "MeinTeam"; 
$datum = date("Y-m-d"); 
$zeit = date("H:i:s"); 

$logEintrag = "Team: $team, Datum: $datum, Zeit: $zeit\n";

//damit man nicht so dumm ist wie ich: DIE log.txt SOLLTE IM SELBEN VERZEICHNISS EXISTIEREN  ^^
file_put_contents('log.txt', $logEintrag, FILE_APPEND);

?>