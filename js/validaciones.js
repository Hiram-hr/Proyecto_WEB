const nombre = document.getElementById("nombre");
const apPat = document.getElementById("apPat");
const apMat = document.getElementById("apMat");
const calle = document.getElementById("calle");
const numero = document.getElementById("numero");
const colonia = document.getElementById("colonia");
const cp = document.getElementById("cp");
const alcaldias =  document.getElementById("alcaldias");
const estados =  document.getElementById("estados");


const form = document.getElementById("form");
const parrafoErr = document.getElementById("parrafoErr");
const boton = document.getElementById("btn");

form.addEventListener("submit",e=>{
    hayError = false;
    mensaje = 'Errores:<br>';

    if(nombre.value.length > 10){
        e.preventDefault();
        mensaje+='Nombre demaciado largo<br>';
        hayError = true;
    }
    if(nombre.value.length==0){
        e.preventDefault();
        mensaje+='Nombre requerido<br>';
        hayError = true;
    }
    if(apPat.value.length > 10){
        e.preventDefault();
        mensaje+='Apellido Paterno demaciado largo<br>';
        hayError = true;
    }
    if(apPat.value.length==0){
        e.preventDefault();
        mensaje+='Apellido Paterno requerido<br>';
        hayError = true;
    }
    if(apMat.value.length > 10){
        e.preventDefault();
        mensaje+='Apellido Materno demaciado largo<br>';
        hayError = true;
    }
    if(apMat.value.length==0){
        e.preventDefault();
        mensaje+='Apellido Materno requerido<br>';
        hayError = true;
    }
    if(calle.value.length > 12){
        e.preventDefault();
        mensaje+='Nombre de la calle demaciado largo<br>';
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
        mensaje+='Número de calle inválido<br>';
        hayError = true;
    }
    if(numero.value.length==0){
        e.preventDefault();
        mensaje+='Número de calle requerido<br>';
        hayError = true;
    }
    if(colonia.value.length > 20){
        e.preventDefault();
        mensaje+='Nombre de la colonia demaciado largo<br>';
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
        mensaje+='Código postal inválido<br>';
        hayError = true;
    }
    if(nombre.value.length==0){
        e.preventDefault();
        mensaje+='Nombre requerido<br>';
        hayError = true;
    }
    if(alcaldias.value.length==0){
        e.preventDefault();
        mensaje+='Elige la alcaldía a la que perteneces<br>';
        hayError = true;
    }
    if(estados.value.length==0){
        e.preventDefault();
        mensaje+='Elige el estado al que perteneces<br>';
        hayError = true;
    }


    if(hayError){//si continuar es false porque algo estuvo mal
        parrafoErr.innerHTML=mensaje;
    } 
    
});