<?php
 include_once('../secretos/conexionsql.php');
 $id_salon = $_GET['id_salon'];
 $dia = $_GET['dia'];
 $horastmt = $conexion->prepare("select menuhora.id_hora, menuhora.hora from menuhora left join registros on menuhora.id_hora where (id_salon = ?) AND (diasemana = DAYOFWEEK(?)) AND (dia IS NULL OR dia != ?);");
 $horastmt->bind_param("iss", $id_salon, $dia, $dia);
 $horastmt->execute();
 $envia = [];
 $horas = mysqli_stmt_get_result($horastmt);
 if($horas){
    while($row = mysqli_fetch_array($horas)){
        $envia[$row["id_hora"]] = $row["hora"];
    }
    echo json_encode($envia);
 }
 else{
    echo json_encode([]);
 }
?>
