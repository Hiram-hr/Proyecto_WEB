<?php
 include_once('../secretos/conexionsql.php');
 $elementosmenu = $conexion->query("select*from menu");
 $envia = [];
 if($elementosmenu){
    while($row = mysqli_fetch_array($elementosmenu)){
        $envia[$row["id_menu"]] = $row["menu"];
    }
    echo json_encode($envia);
 }
 else{
    echo json_encode([]);
 }
?>

