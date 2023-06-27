 <?php
 session_start();

 if(array_key_exists("admin", $_SESSION) && $_SESSION["admin"] == "true"){
     echo json_encode(["resultado" => "si"]);
 }
 else{
     echo json_encode(["resultado" => "no"]);
 }
 ?>
