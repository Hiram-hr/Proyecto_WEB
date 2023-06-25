<?php
 include_once('../secretos/conexionsql.php');
 $elementosmenu = $conexion->query("select*from evento");
 $envia = [];
 if($elementosmenu){
    while($row = mysqli_fetch_array($elementosmenu)){
        $envia[$row["id_evento"]] = $row["evento"];
    }
    echo json_encode($envia);
 }
 else{
    echo json_encode([]);
 }
?>
