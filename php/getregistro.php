<?php
 include_once('../secretos/conexionsql.php');
 if(!array_key_exists("id", $_GET)){
     echo json_encode(["resultado" => "error", "causa" => "id"]);
     exit();
 }
 $id = $_GET["id"];
 $datosstmt = $conexion->prepare("select*from registros natural join menuhora where id_registro = ?");
 $datosstmt->bind_param("s", $id);
 $datosstmt->execute();
 $envia = [];
 $datos = mysqli_stmt_get_result($datosstmt);
 if($datos){
    if($row = mysqli_fetch_array($datos)){
        echo json_encode($row);
    }
 }
 else{
    echo json_encode([]);
 }
?>
