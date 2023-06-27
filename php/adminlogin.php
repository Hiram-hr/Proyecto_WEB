<?php
 session_start();
 include_once('../secretos/conexionsql.php');
 $nick = $_POST['nick'];
 $pass = $_POST['pass'];

 $loginstmt = $conexion->prepare("select*from administrador where nick = ? AND pass = ?");
 $loginstmt->bind_param("ss", $nick, $pass);

 $loginstmt->execute();
 $login = mysqli_stmt_get_result($loginstmt);
 if($login){
    if($row = mysqli_fetch_array($login)){
        $_SESSION["admin"] = "true";
        $_SESSION["nick"] = $nick;
        echo json_encode(["resultado" => "exito"]);
        exit();
    }
    else{
        echo json_encode(["resultado" => "error"]);
        exit();
    }
 }
 else{
    echo json_encode(["resultado" => "error"]);
    exit();
 }
?>
