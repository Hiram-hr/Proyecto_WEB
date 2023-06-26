<?php
//Generación del pdf contratación DJ
//Agregamos la libreria
require('library/fpdf.php');
 include_once('../secretos/conexionsql.php');
 if(!array_key_exists("id", $_GET)){
     echo json_encode(["resultado" => "error", "causa" => "id"]);
     exit();
 }
 $id = $_GET["id"];
 $datosstmt = $conexion->prepare("select id_registro, curp, nombre, appat, apmat, calle, numero, colonia, cp, estado, correo, telefono, personas, evento, otroev, dia, hora, evento, salon, menu  from registros natural join menuhora natural join evento natural join salon natural join estado natural join menu where id_registro = ?");
 $datosstmt->bind_param("s", $id);
 $datosstmt->execute();
 $datos = mysqli_stmt_get_result($datosstmt);
 if(!$datos){
    header("HTTP/1.0 404 Not Found");
    die();
 }

  if($datos->num_rows == 0){
    header("HTTP/1.0 404 Not Found");
    die();
 }

 $row = mysqli_fetch_array($datos);
//Obtenemos los datos:
$nombre = $row["nombre"]; //$_SESSION["nombre"];
$ap = $row["appat"]; //$_SESSION["ap"];
$am = $row["apmat"]; //$_SESSION["am"];
$calle = $row["calle"]; //$_SESSION["calle"];
$numero = $row["numero"]; //$_SESSION["numero"];
$colonia = $row["colonia"]; //$_SESSION["colonia"];
$cp = $row["cp"]; // $_SESSION["cp"];
$entidades = $row["estado"]; // $_SESSION["entidades"];
$correo = $row["correo"]; //$_SESSION["correo"];
$telefono = $row["telefono"]; //$_SESSION["telefono"];
$curp = $row["curp"]; //$_SESSION["curp"];
//DEL EVENTO:
$fecha = $row["dia"]; //$_SESSION["fecha"];
$horario = $row["hora"]; //$_SESSION["horario"];
$evento = $row["evento"]; //$_SESSION["evento"];
$invitados = $row["personas"]; //$_SESSION["invitados"];
$menu = $row["menu"]; //$_SESSION["menu"];
$folio = $row["id_registro"]; //$_SESSION["folio"];
$sala = $row["salon"]; //$_SESSION["sala"];
class PDF extends FPDF
{
    function Header(){
        $this->Image('../imgs/logoDJmirasahi_contratacion.png', 180, 13, 30);
        // Fuente, color del título
        $this->SetFont('helvetica', 'B', 15);
        $this->SetTextColor(37, 36, 64);
        $this->Cell(0, 15,mb_convert_encoding('Comprobante de contratación', 'ISO-8859-1', 'UTF-8') , 0, 1, 'C');
        $this->Ln(15);
    }
    function Footer(){
        //Posición a 2 cm desde el final
        $this->SetY(-25);
        //Fuente, color del footer
        $this->SetFont('courier', 'B', 10);
        $this->SetTextColor(100);
        //#página
        $this->Cell(0, 12, mb_convert_encoding('Pág ', 'ISO-8859-1', 'UTF-8') . $this->PageNo(), 0, 0, 'C');
    }
}
//Creando el PDF:
$pdf = new PDF();
$pdf->AddPage();
//Fuente, tamaño y color del contenido 
$pdf->SetFont('helvetica', 'B', 12);
$pdf->SetTextColor(37, 36, 64);
//color de fondo:
$pdf->SetFillColor(255, 255, 255);
//Datos recabados:
$pdf->Cell(25, 12, 'Nombre (s):', 0, 0,'L' ,true);
$pdf->Cell(0, 12, mb_convert_encoding($nombre, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Cell(38, 12, 'Apellido Paterno:', 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($ap, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Cell(38, 12, 'Apellido Materno:', 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($am, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Cell(12, 12, 'Calle:', 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($calle, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Cell(19, 12, mb_convert_encoding('Número: ', 'ISO-8859-1', 'UTF-8'), 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($numero, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Cell(19, 12, 'Colonia:', 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($colonia, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Cell(32, 12, mb_convert_encoding('Código Postal:', 'ISO-8859-1', 'UTF-8'), 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($cp, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Cell(19, 12, 'Entidad:', 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($entidades, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Cell(40, 12, mb_convert_encoding('Correo electrónico:', 'ISO-8859-1', 'UTF-8'), 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($correo, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Cell(20, 12, mb_convert_encoding('Teléfono: ', 'ISO-8859-1', 'UTF-8'), 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($telefono, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Cell(15, 12, 'CURP:', 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($curp, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Cell(15, 12, 'Fecha:', 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($fecha, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Cell(18, 12, 'Horario:', 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($horario, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Cell(17, 12, 'Evento:', 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($evento, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Cell(15, 12, 'Sala:', 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($sala, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Cell(21, 12, 'Invitados:', 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($invitados, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Cell(14, 12, mb_convert_encoding('Menú:', 'ISO-8859-1', 'UTF-8'), 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($menu, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Cell(14, 12, 'Folio:', 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($folio, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

$pdf->Output('comprobante.pdf', 'I');

?>
