const nombre = document.getElementById("nombre");
const apPat = document.getElementById("apPat");
const apMat = document.getElementById("apMat");
const calle = document.getElementById("calle");
const numero = document.getElementById("numero");
const colonia = document.getElementById("colonia");
const cp = document.getElementById("cp");
const alcaldias =  document.getElementById("alcaldias");
const estados =  document.getElementById("estados");
const evento =  document.getElementById("TipoEvento");
const tipoMenu =  document.getElementById("menu");
const correo =  document.getElementById("correo");
const telefono =  document.getElementById("telefono");
const curp =  document.getElementById("curp");


const form = document.getElementById("form");
const parrafoErr = document.getElementById("parrafoErr");
const boton = document.getElementById("btn"); //se ocupa?

form.addEventListener("submit",e=>{
    hayError = false;
    mensaje = 'Errores:<br>';

    if(nombre.value.length > 10){
        e.preventDefault();
        mensaje+='Nombre demasiado largo<br>';
        hayError = true;
    }
    if(nombre.value.length==0){
        e.preventDefault();
        mensaje+='Nombre requerido<br>';
        hayError = true;
    }
    if(apPat.value.length > 10){
        e.preventDefault();
        mensaje+='Apellido Paterno demasiado largo<br>';
        hayError = true;
    }
    if(apPat.value.length==0){
        e.preventDefault();
        mensaje+='Apellido Paterno requerido<br>';
        hayError = true;
    }
    if(apMat.value.length > 10){
        e.preventDefault();
        mensaje+='Apellido Materno demasiado largo<br>';
        hayError = true;
    }
    if(apMat.value.length==0){
        e.preventDefault();
        mensaje+='Apellido Materno requerido<br>';
        hayError = true;
    }
    if(calle.value.length > 12){
        e.preventDefault();
        mensaje+='Nombre de la calle demasiado largo<br>';
        hayError = true;
    }
    if(calle.value.length==0){
        e.preventDefault();
        mensaje+='Calle requerida<br>';
        hayError = true;
    }
    let regExNum = /^[0-9]*$/;
    if(!regExNum.test(numero.value) || numero.value.length > 5){
        e.preventDefault();
        mensaje+='N&uacute;mero de calle inválido<br>';
        hayError = true;
    }
    if(numero.value.length==0){
        e.preventDefault();
        mensaje+='N&uacute;mero de calle requerido<br>';
        hayError = true;
    }
    if(colonia.value.length > 20){
        e.preventDefault();
        mensaje+='Nombre de la colonia demasiado largo<br>';
        hayError = true;
    }
    if(colonia.value.length==0){
        e.preventDefault();
        mensaje+='Colonia requerida<br>';
        hayError = true;
    }
    let regExCp = /^[0-9]{4,7}$/;
    if(!regExCp.test(cp.value)){
        e.preventDefault();
        mensaje+='C&oacute;digo postal inv&aacute;lido<br>';
        hayError = true;
    }
    if(nombre.value.length==0){
        e.preventDefault();
        mensaje+='Nombre requerido<br>';
        hayError = true;
    }
    if(alcaldias.value.length==0){
        e.preventDefault();
        mensaje+='Elige la alcald&iacute;a a la que perteneces<br>';
        hayError = true;
    }
    if(estados.value.length==0){
        e.preventDefault();
        mensaje+='Elige el estado al que perteneces<br>';
        hayError = true;
    }
    let regExMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // [^\s@]+ quiere decir uno o más caracteres que no sean espacios o el símbolo @ (la negación la viene haciendo el ^). \. significa un caracter punto, se pone así porque el punto es un metacaracter para js
    if(!regExMail.test(correo.value)){
        e.preventDefault();
        mensaje+='Correo inv&aacute;lido<br>';
        hayError = true;
    }
    let regExTel = /^[0-9]{10}$/;
    if(!regExTel.test(telefono.value)){
        e.preventDefault();
        mensaje+='N&uacute;mero inv&aacute;lido<br>';
        hayError = true;
    }
    let regExCURP = /^[A-Z]{4}[0-9]{6}[A-Z]{6}([0-9]{2}|[A-Z][0-9])$/;
    if(!regExCURP.test(curp.value)){
        e.preventDefault();
        mensaje+='CURP inv&aacute;lido<br>';
        hayError = true;
    }

    //Parte Raul

    if(evento.value.length==0){
        e.preventDefault();
        mensaje+='Elige el tipo de evento<br>';
        hayError = true;
    }
    
    if(tipoMenu.value.length==0){
        e.preventDefault();
        mensaje+='Elige el tipo de menú<br>';
        hayError = true;
    }
    if(hayError){//si continuar es false porque algo estuvo mal
        parrafoErr.innerHTML=mensaje;
    }   
});

document.getElementById("evento").addEventListener("change", mostrarOtro);

function mostrarOtro() {
   var otroSelect = document.getElementById("evento");
   var eventoInput = document.getElementById("otroEvento");

   if (otroSelect.value === "otro") {
     eventoInput.style.display = "block";
     eventoInput.required = false; // Desactivar la validación del campo "Evento" cuando se selecciona "Otro"
   } else {
     eventoInput.style.display = "none";
     eventoInput.required = true; // Activar la validación del campo "Evento" cuando se deselecciona "Otro"
   }
 }

 function ocultarEvento() {
   var otroSelect = document.getElementById("evento");
   var eventoInput = document.getElementById("otroEvento");

   if (otroSelect.value !== "otro") {
     eventoInput.style.display = "none";
     eventoInput.required = false; // Desactivar la validación del campo "Evento" cuando se selecciona una opción diferente a "Otro"
   }
 }
