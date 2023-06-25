<!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
      <link type="text/css" rel="stylesheet" href="css/style.css"  media="screen,projection"/>
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <!--UTF-8-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    </head>
    <body class="gradiente">
        <header>
            <div  style="padding: 10px;">
                 <a href="" class="logoNav">
                 <img src="imgs/logoDJmirasahi_contratacion.png" alt="Logo DJ"/>
                 </a>
            </div>
         </header>
        <div class="row container">
            <?php
                $nombre = $_POST['nombre'];
                $apPat = $_POST['appat'];
                $apMat = $_POST['apmat'];
                $calle = $_POST['calle'];
                $numero = $_POST['numero'];
                $colonia = $_POST['colonia'];
                $cp = $_POST['cp'];
                $alcaldia = $_POST['alcaldia'];
                $estado = $_POST['estado'];
                $fecha = $_POST['fecha'];
                $horario = $_POST['horario'];
                $correo = $_POST['correo'];
                $telefono = $_POST['telefono'];
                $curp = $_POST['curp'];
                $menu = $_POST['menu'];
                echo"<h3 class='center' style='display: block;'>Hola " .$nombre .", valida que los datos proporcionados sean correctos </h3><br>
                <div class='col s12 m8'>
                    <h5 class='z-depth-5'>
                    Nombre: <b>" .$nombre ."</b><br>  
                    Apellido Paterno: <b>" .$apPat ."</b><br>
                    Apellido Materno: <b>" .$apMat ."</b><br>
                    Calle: <b>" .$calle ."</b><br>
                    Número de calle: <b>" .$numero ."</b><br>
                    Colonia: <b>" .$colonia ."</b><br>
                    Código postal: <b>" .$cp ."</b><br>
                    Alcaldía: <b>" .$alcaldia ."</b><br>
                    Estado: <b>" .$estado ."</b><br>
                    Fecha del evento: <b>" .$fecha ."</b><br>
                    Hora del evento: <b>" .$horario ."</b><br>
                    Correo: <b>" .$correo ."</b><br> 
                    Teléfono: <b>" .$telefono ."</b><br>
                    Curp: <b>" .$curp ."</b><br>
                    Menú contratado: <b>" .$menu ."</b><br>
                    </h5>
                </div>
                ";
            ?>
            <div class="row">
                    <div class="input-field col s6">
                        <button class="btn waves-effect waves-light" type="button" name="Aceptar" id="acepar" onclick=Aceptar()>Aceptar
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                        <div class="input-field col s6">
                        <button class="btn waves-effect waves-light" type="button" name="Modificar" id="modificar" onclick=Modificar()>Modificar
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            
        </div>


        <!--JavaScript at end of body for optimized loading-->
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="js/materialize.js"></script>
        <script src="js/init.js"></script>
        <script src="js/form.js"></script>
    </body>

  </html>
