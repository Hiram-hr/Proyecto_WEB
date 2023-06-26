<?php
//Generación del pdf contratación DJ
//Agregamos la libreria
require('library/fpdf.php');
//Obtenemos los datos:
$nombre = "Karlo"; //$_SESSION["nombre"];
$ap = "Paramo"; //$_SESSION["ap"];
$am = "Chin"; //$_SESSION["am"];
$calle = "Lomas"; //$_SESSION["calle"];
$numero = "2"; //$_SESSION["numero"];
$colonia = "Villa Real"; //$_SESSION["colonia"];
$alcaldia = "Nuncia"; //$_SESSION["alcaldia"];
$cp = "45336"; // $_SESSION["cp"];
$entidades = "Tlaxcala"; // $_SESSION["entidades"];
$correo = "correo@ghgh.com"; //$_SESSION["correo"];
$telefono = "1234567890"; //$_SESSION["telefono"];
$curp = "PACK010203JKMMPLA2"; //$_SESSION["curp"];
//DEL EVENTO:
$fecha = "10/06/23"; //$_SESSION["fecha"];
$horario = "14:00 a 19:00"; //$_SESSION["horario"];
$evento = "Baile"; //$_SESSION["evento"];
$invitados = "100"; //$_SESSION["invitados"];
$menu = "economico"; //$_SESSION["menu"];
$folio = "PACK010203JKMMPLA2100623"; //$_SESSION["folio"];
$sala = "Shady"; //$_SESSION["sala"];

// Clase extendida de FPDF para agregar encabezado y pie de página personalizados
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

$pdf->Cell(19, 12, mb_convert_encoding('Alcaldía: ', 'ISO-8859-1', 'UTF-8'), 0, 0, 'L', true);
$pdf->Cell(0, 12, mb_convert_encoding($alcaldia, 'ISO-8859-1', 'UTF-8'), 0, 1, 'L', true);

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

$pdf->Output('formulario.pdf', 'I');

//**********************************************************
// ESPACIO PARA CERRAR LA CONEXION Y LIBERAR RECURSOS la conexión y liberar recursos
//**********************************************************   
    //$stmt->close(); eliminar esto
    //$enlace->close(); eliminar esto
//**********************************************************
?>