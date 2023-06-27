<?php
 session_start();
 include_once('../secretos/conexionsql.php');

 if(!array_key_exists("admin", $_SESSION) || $_SESSION["admin"] != "true"){
     echo json_encode(["resultado" => "error", "razon" => "Acceso denegado"]);
     exit();
 }

 $ids = $conexion->query("select id_registro from registros");
 $envia = [];
 if($ids){
    while($id = mysqli_fetch_array($ids)){
        array_push($envia, $id["id_registro"]);
    }
    echo json_encode($envia);
 }
 else{
    echo json_encode([]);
 }
?>
