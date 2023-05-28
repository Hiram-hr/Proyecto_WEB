const nombre = document.getElementById("nombre");


const form = document.getElementById("form");
const parrafoErr = document.getElementById("parrafoErr");
const boton = document.getElementById("btn");

form.addEventListener("submit",e=>{
    continuar = true;
    mensaje = 'Errores<br>';
    if(nombre.value.length > 10){
        e.preventDefault();
        //alert("Nombre muy largo");
        mensaje+='Nombre demaciado largo<br>';
        parrafoErr.innerHTML=mensaje;
        continuar = false;
    }
});