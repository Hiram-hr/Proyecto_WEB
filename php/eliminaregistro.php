 <?php
 session_start();
 include_once('../secretos/conexionsql.php');
 if(!array_key_exists("admin", $_SESSION) || $_SESSION["admin"] != "true"){
     echo json_encode(["resultado" => "error", "razon" => "Acceso denegado"]);
     exit();
 }

 if(!array_key_exists("id", $_GET)){
     echo json_encode(["resultado" => "error", "razon" => "id"]);
     exit();
 }
 $id = $_GET["id"];
 $datosstmt = $conexion->prepare("delete from registros where id_registro = ?");
 $datosstmt->bind_param("s", $id);
 $datosstmt->execute();

 header("Location: ../admin.html");
 die();


 ?>
