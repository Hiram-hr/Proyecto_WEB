<!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
      <link type="text/css" rel="stylesheet" href="css/style.css"  media="screen,projection"/>
      <link type="text/css" rel="stylesheet" href="css/miEstilo.css"  media="screen,projection"/>
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>

    <body class="asd">
        <div class="row container">
            <h2 class="center">Contratación</h2>
            <p id="parrafoErr" style="color:red;"></p>
            <br><br>
            <form class="col s12" action="index.html" method="post" id="form">
                <fieldset>
                    <legend>Contacto</legend>
                    <div class="row">
                        <div class="input-field col s4">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="nombre" type="text" name="nombre" class="validate">
                            <label for="nombre">Nombre</label>
                        </div>

                        <div class="input-field col s4">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="apPat" type="text" name="apPat" class="validate">
                            <label for="apPat">Apellido Paterno</label>
                        </div>

                        <div class="input-field col s4">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="apMat" type="text" name="apMat" class="validate">
                            <label for="apMat">Apellido Materno</label>
                        </div>
                    </div><br><br>

                    <div class="row">
                        <div class="input-field col s4">
                            <i class="material-icons prefix">place</i>
                            <input id="calle" type="text" name="calle" class="validate">
                            <label for="calle">Calle</label>
                        </div>

                        <div class="input-field col s4">
                            <i class="material-icons prefix">edit_location</i>
                            <input id="numero" type="text" name="numero" class="validate">
                            <label for="numero">Número</label>
                        </div>

                        <div class="input-field col s4">
                            <i class="material-icons prefix">explore</i>
                            <input id="colonia" type="text" name="colonia" class="validate">
                            <label for="colonia">Colonia</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s4">
                            <select name="alcaldias" id="alcaldias">
                                <option value="" selected>Elija una opción</option>
                                <option value="Azcapotzalco">Azcapotzalco</option>
                                <option value="Coyoacan">Coyoacán</option>
                                <option value="Cuajimalpa">Cuajimalpa de Morelos</option>
                                <option value="GustavoA.Madero">Gustavo A. Madero</option>
                                <option value="Iztacalco">Iztacalco</option>
                                <option value="Iztapalapa">Iztapalapa</option>
                                <option value="LaMagdalenaContreras">La Magdalena Contreras</option>
                                <option value="MilpaAlta">Milpa Alta</option>
                                <option value="AlvaroObregon">Álvaro Obregón</option>
                                <option value="Tlahuac">Tláhuac</option>
                                <option value="Tlalpan">Tlalpan</option>
                                <option value="Xochimilco">Xochimilco</option>
                                <option value="BenitoJuarez">Benito Juárez</option>
                                <option value="Cuauhtemoc">Cuauhtémoc</option>
                                <option value="MiguelHidalgo">Miguel Hidalgo</option>
                                <option value="VenustianoCarranza">Venustiano Carranza</option>
                            </select>
                            <label for="municipio">Alcaldía/Municipio</label>
                        </div>

                        <div class="input-field col s4">
                            <i class="material-icons prefix">map</i>
                            <input id="cp" type="text" name="cp" class="validate">
                            <label for="cp">Código Postal</label>
                        </div>

                        <div class="input-field col s4">
                            <select name="estidados" id="estados">
                                <option value="" selected>Elija una opción</option>
                                <option value="1">Aguascalientes</option>
                                <option value="2">Baja California</option>
                                <option value="3">Baja California Sur</option>
                                <option value="4">Campeche</option>
                                <option value="5">Coahuila</option>
                                <option value="6">Colima</option>
                                <option value="7">Chiapas</option>
                                <option value="8">Chihuahua</option>
                                <option value="9">Distrito Federal</option>
                                <option value="10">Durango</option>
                                <option value="11">Guanajuato</option>
                                <option value="12">Guerrero</option>
                                <option value="13">Hidalgo</option>
                                <option value="14">Jalisco</option>
                                <option value="15">México</option>
                                <option value="16">Michoacán</option>
                                <option value="17">Morelos</option>
                                <option value="18">Nayarit</option>
                                <option value="19">Nuevo León</option>
                                <option value="20">Oaxaca</option>
                                <option value="21">Puebla</option>
                                <option value="22">Querétaro</option>
                                <option value="23">Quintana Roo</option>
                                <option value="24">San Luis Potosí</option>
                                <option value="25">Sinaloa</option>
                                <option value="26">Sonora</option>
                                <option value="27">Tabasco</option>
                                <option value="28">Tamaulipas</option>
                                <option value="29">Tlaxcala</option>
                                <option value="30">Veracruz</option>
                                <option value="31">Yucatán</option>
                                <option value="32">Zacatecas</option>
                            </select>
                            <label for="municipio">Entidad Federativa</label>
                        </div>
                    </div><br><br>

                    <div class="row">
                        <div class="input-field col s9">
                            <i class="material-icons prefix">email</i>
                            <input id="correo" type="text" name="correo" class="validate">
                            <label for="correo">Correo</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s9">
                            <i class="material-icons prefix">ring_volume</i>
                            <input id="telefono" type="text" name="telefono" class="validate">
                            <label for="telefono">Teléfono</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s9">
                            <i class="material-icons prefix">person</i>
                            <input id="curp" type="text" name="curp" class="validate">
                            <label for="curp">CURP</label>
                        </div>
                    </div>

                </fieldset>

                <div class="row">
                    <div class="input-field col s6">
                        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <!--JavaScript at end of body for optimized loading-->
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="js/materialize.js"></script>
        <script src="js/init.js"></script>
        <script src="js/validaciones.js"></script>
    </body>
  </html>