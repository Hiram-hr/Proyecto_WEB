


const nombre = document.getElementById("nombre");
const appat = document.getElementById("appat");
const apmat = document.getElementById("apmat");
const calle = document.getElementById("calle");
const numero = document.getElementById("numero");
const colonia = document.getElementById("colonia");
const cp = document.getElementById("cp");
const alcaldia =  document.getElementById("alcaldia");
const estado =  document.getElementById("estado");
const fecha =  document.getElementById("fecha");
const horario =  document.getElementById("horario");


const form = document.getElementById("form");
const coleccionErrores = document.getElementById("errores");
const boton = document.getElementById("btn");

document.addEventListener("DOMContentLoaded", function() {
    //Inicializar elemento de fecha del form
    const hoy = new Date();
    const options = {"format":"yyyy-mm-dd",
                     "minDate": hoy,
                     "defaultDate": hoy,
                     "setDefautDate": true
                     };
    M.Datepicker.init(fecha, options);

});

function validaLongitud(valida, min, max, vacioPermitido){
    let mensajes = [];
    //La longitud es 0 y no se permite dicha longitud, caso especial
    if(!valida.length && min){
        mensajes.push('Proporciona este dato');
        return mensajes;
    }
    if(valida.length < min)
        mensajes.push('Más pequeño de lo permitido');
    if(valida.length > max)
        mensajes.push('Más grande de lo permitido');

    return mensajes;
}

function anadeError(mapa, objeto, error){
    var existe = mapa.get(objeto);
    if(typeof existe === 'undefined'){
        if(error instanceof Array)
            mapa.set(objeto, error);
        else
            mapa.set(objeto, [error]);
        return;
    }

    if(error instanceof Array)
        mapa.set(objeto, existe.concat(error));
    else
        existe.push(error);
}

function colocaSiError(mapaErrores, objeto, errores){
    if(errores.length)
        anadeError(mapaErrores, objeto, errores);
}

form.addEventListener("submit", (e) => {
    var errores = new Map();
    hayError = false;
    mensaje = 'Errores:<br>';

    var regnom = /^[A-Za-záéíóú]+$/;

    colocaSiError(errores, nombre, validaLongitud(nombre.value, 2, 15));
    if(!regnom.test(nombre.value))
        anadeError(errores, nombre, "El nombre es inválido");

    colocaSiError(errores, appat, validaLongitud(appat.value, 2, 15));
    if(!regnom.test(appat.value))
        anadeError(errores, appat, "El apellido paterno es inválido");

    colocaSiError(errores, apmat, validaLongitud(apmat.value, 2, 15));
    if(!regnom.test(apmat.value))
        anadeError(errores, apmat, "El apellido materno es inválido");

    colocaSiError(errores, calle, validaLongitud(calle.value, 2, 15));
    colocaSiError(errores, numero, validaLongitud(numero.value, 5, 5));
    if(!/^[0-9]*$/.test(numero.value))
        anadeError(errores, numero, "El dato es inválido");

    colocaSiError(errores, colonia, validaLongitud(colonia.value, 1, 20));
    if(!/^[0-9]{4,7}$/.test(cp.value))
        anadeError(errores, numero, "El dato es inválido");

    colocaSiError(errores, alcaldia, validaLongitud(alcaldia.value, 1, Infinity));
    colocaSiError(errores, estado, validaLongitud(estado.value, 1, Infinity));
    if(errores.size){
        e.preventDefault();
        coleccionErrores.textContent = '';
        errores.forEach((eErrores, elemento) => {
            console.log(elemento);
            console.log(eErrores);
            var mensajeError = "";
            /*let nodElemento = document.createElement("div");
            nodElemento.classList.add("card","col","red","section");

            let nodTElemento =  document.createElement("h6");*/

            //let nomElem = (typeof elemento.labels !== 'undefined') ? elemento.labels[0] : undefined;

            /*nodTElemento.textContent = (typeof nomElem !== 'undefined') ? nomElem.textContent : elemento.getAttribute('placeholder');
            nodElemento.appendChild(nodTElemento);

            let nodErrores = document.createElement("ul");
            nodErrores.classList.add("collection");*/
            eErrores.forEach((textoError) => {
                mensajeError += textoError + "; ";
                /*let nodError = document.createElement("li");
                nodError.classList.add("collection-item");
                let nodHError = document.createElement("p");
                nodHError.textContent = textoError;
                nodError.appendChild(nodHError);
                nodErrores.appendChild(nodError);*/
            });
            /*nodElemento.appendChild(nodErrores);

            coleccionErrores.appendChild(nodElemento);*/
            let reganaText = document.createElement("span");
            reganaText.classList.add("helper-text");
            reganaText.setAttribute("data-error", mensajeError);
            elemento.after(reganaText);
            elemento.classList.add("invalid");
        });
        M.updateTextFields();
    }
    
});


document.getElementById("TipoEvento").addEventListener("change", mostrarOtro);

function mostrarOtro() {
   var otroSelect = document.getElementById("TipoEvento");
   var eventoInput = document.getElementById("otroEvento");

   if (otroSelect.value === "Otro") {

     eventoInput.style.display = "block";
     eventoInput.required = false; // Desactivar la validación del campo "Evento" cuando se selecciona "Otro"
   } else {
     eventoInput.style.display = "none";
     eventoInput.required = true; // Activar la validación del campo "Evento" cuando se deselecciona "Otro"
   }
 }

 function ocultarEvento() {

   var otroSelect = document.getElementById("TipoEvento");
   var eventoInput = document.getElementById("otroEvento");

   if (otroSelect.value !== "Otro") {
     eventoInput.style.display = "none";
     eventoInput.required = false; // Desactivar la validación del campo "Evento" cuando se selecciona una opción diferente a "Otro"
   }
 }

