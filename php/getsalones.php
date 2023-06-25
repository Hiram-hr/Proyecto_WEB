<?php
 include_once('../secretos/conexionsql.php');
 $elementosmenu = $conexion->query("select*from salon");
 $envia = [];
 if($elementosmenu){
    while($row = mysqli_fetch_array($elementosmenu)){
        $envia[$row["id_salon"]] = $row["salon"];
    }
    echo json_encode($envia);
 }
 else{
    echo json_encode([]);
 }
?>
