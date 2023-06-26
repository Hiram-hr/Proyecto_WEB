<?php
 include_once('../secretos/conexionsql.php');
 $ptext = "/^[\s,\.A-Za-záéíóúñÁÉÍÓÚÑ]{2,25}$/";
 $rtext = array("nombre", "appat", "apmat", "calle", "colonia");
 $rnum = array("estado", "menu", "evento", "salon");
 $dtext = array();
 $dnum = array();
 foreach ($rtext as &$txt){
      if(!preg_match($ptext,$_POST[$txt])){
         echo json_encode(["resultado" => "error", "causa" => $txt]);
         exit();
      }
      $dtext[$txt] = $_POST[$txt];
 }

 foreach ($rnum as &$nm){
      if(!preg_match("/^[0-9]+$/",$_POST[$nm])){
         echo json_encode(["resultado" => "error", "causa" => $nm]);
         exit();
      }
      $dnum[$nm] = $_POST[$nm];
 }

 $otroev = $_POST["otroev"];
 if($dnum["evento"] == "1"){
   if(!preg_match($ptext, $txt)){
      echo json_encode(["resultado" => "error", "causa" => "Evento alternativo no es válido"]);
      exit();
   }
 }
 else{
      $otroev = "";
 }

 if($dnum["estado"] == 1){
      if(!preg_match("/^[0-9]+$/",$_POST["alcaldia"])){
         echo json_encode(["resultado" => "error", "causa" => "alcaldia"]);
         exit();
      }
      $dnum["alcaldia"] = $_POST["alcaldia"];
 }

 $numero = $_POST["numero"];
 if(!preg_match("/^[0-9]{1,8}$/", $numero)){
      echo json_encode(["resultado" => "error", "causa" => "numero"]);
      exit();
 }

 $telefono = $_POST["telefono"];
 if(!preg_match("/^[0-9]{8,10}$/", $telefono)){
      echo json_encode(["resultado" => "error", "causa" => "telefono"]);
      exit();
 }

 $cp = $_POST["cp"];
 if(!preg_match("/^[0-9]{5}$/", $cp)){
      echo json_encode(["resultado" => "error", "causa" => "cp"]);
      exit();
 }

 $curp = $_POST["curp"];
 if(!preg_match("/^[A-Z]{4}[0-9]{2}(1[0-2]|0[1-9])([1-2][0-9]|0[1-9]|3[0-1])(H|M)[A-Z]{2}[A-Z]{3}[0-9]{2}$/", $curp)){
      echo json_encode(["resultado" => "error", "causa" => "curp"]);
      exit();
 }
 $correo = $_POST["correo"];
 if(!preg_match("/^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/", $correo)){
      echo json_encode(["resultado" => "error", "causa" => "correo"]);
      exit();
 }
 $personas = $_POST["personas"];
 if((!preg_match("/^[0-9]+$/", $personas)) || (((int)$personas) < 75) && (((int)$personas) > 200)){
      echo json_encode(["resultado" => "error", "causa" => "Cantidad de personas inválida"]);
      exit();
 }

 $menuhora = $_POST["menuhora"];
 $dia = $_POST["dia"];
 $id = $curp.str_replace("-","",$dia).$menuhora;
 $conexion->begin_transaction();
 $horastmt = $conexion->prepare("select id_menuhora from registros where id_menuhora = ? AND dia = ? AND id_registro != ? for update");
 $horastmt->bind_param("iss", $rnum["dia"], $menuhora, $id);
 $horastmt->execute();
 $horas = mysqli_stmt_get_result($horastmt);
 if(($horas->num_rows != 0)){
    echo json_encode(["resultado" => "error", "causa" => "Hora seleccionada es inválida"]);
    $conexion->commit();
   exit();
 }

 $registrastmt = $conexion->prepare("replace into registros values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
 $registrastmt->bind_param("ssssssisisisiiiisis", $id, $curp, $dtext["nombre"], $dtext["appat"], $dtext["apmat"], $dtext["calle"], $numero, $dtext["colonia"], $dnum["alcaldia"], $cp, $dnum["estado"], $correo, $telefono, $personas, $menuhora, $dnum["evento"], $otroev, $dnum["menu"], $dia);
 $registrastmt->execute();
 $conexion->commit();
 echo json_encode(["resultado" => "exito"]);
?>
