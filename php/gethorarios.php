<?php
 include_once('../secretos/conexionsql.php');
 $id_salon = $_GET['id_salon'];
 $dia = $_GET['dia'];

 if(array_key_exists("id", $_GET)){
    $id = $_GET['id'];
    $horastmt = $conexion->prepare("select menuhora.id_horario, menuhora.hora from menuhora left join registros on menuhora.id_horario = registros.id_horario where (id_salon = ?) AND (diasemana = DAYOFWEEK(?)) AND ((dia IS NULL) OR id_registro = ?);");
    $horastmt->bind_param("iss", $id_salon, $dia, $id);
 }
 else{
   $horastmt = $conexion->prepare("select menuhora.id_horario, menuhora.hora from menuhora left join registros on menuhora.id_horario = registros.id_horario where (id_salon = ?) AND (diasemana = DAYOFWEEK(?)) AND (dia IS NULL);");
   $horastmt->bind_param("is", $id_salon, $dia);
 }

 $horastmt->execute();
 $envia = [];
 $horas = mysqli_stmt_get_result($horastmt);
 if($horas){
    while($row = mysqli_fetch_array($horas)){
        $envia[$row["id_horario"]] = $row["hora"];
    }
    echo json_encode($envia);
 }
 else{
    echo json_encode([]);
 }
?>
