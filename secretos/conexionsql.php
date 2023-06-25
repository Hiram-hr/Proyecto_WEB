<?php
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    $host = 'localhost';
    $bd = 'mirasahi';
    $user = 'usuario';
    $pass = 'usuario';
    $conexion = new mysqli($host, $user, $pass, $bd);
?>
