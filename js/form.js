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
const correo =  document.getElementById("correo");
const telefono =  document.getElementById("telefono");
const curp =  document.getElementById("curp");
const menu = document.getElementById("menu");
const tipoevento = document.getElementById("evento");
const otroevento = document.getElementById("otroev");
var eliminame = new Array();


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

function addOption(texto){//crea un elemento opcion con el texto y valor indicados y se lo añade a la lista desplegable "horario"
    const elem_option = document.createElement('option');
    elem_option.text = texto;
    elem_option.value = texto;
    horario.add(elem_option);
}

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


function validaFecha(){//valida que se elija un viernes, sabado o domingo, y actualiza los valores del horario
    let mensajes = [];
    const fechaSelec = new Date(fecha.value);
    const dia = fechaSelec.getDay();

    if (!(dia === 5 | dia === 6 | dia === 0)){//No es un día válido
        mensajes.push('Día inválido');
    }
    return mensajes;
}


/*
function validaSelect(valida, vacioPermitido){
    let mensajes = [];
    //La longitud es 0 y no se permite dicha longitud, caso especial
    if(valida=="Elija una opción"){
        mensajes.push('Proporciona este dato');
        return mensajes;
    }
}*/

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
    if(!regnom.test(calle.value))
        anadeError(errores, calle, "Nombre de calle inválido");

    colocaSiError(errores, numero, validaLongitud(numero.value, 1, 8));
    if(!/^[0-9]+$/.test(numero.value))
        anadeError(errores, numero, "El numero es inválido");

    colocaSiError(errores, colonia, validaLongitud(colonia.value, 1, 20));
    if(!regnom.test(colonia.value))
        anadeError(errores, colonia, "La colonia es inválida");

    colocaSiError(errores, alcaldia, validaLongitud(alcaldia.value, 1, Infinity));

    colocaSiError(errores, cp, validaLongitud(cp.value, 5, 5));
    if(!/^[0-9]{5}$/.test(cp.value))
        anadeError(errores, cp, "El código postal es inválido");

    colocaSiError(errores, estado, validaLongitud(estado.value, 1, Infinity));
    colocaSiError(errores, menu, validaLongitud(menu.value, 1, Infinity));
    colocaSiError(errores, correo, validaLongitud(correo.value, 10, Infinity));
    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(correo.value))
        anadeError(errores, correo, "El correo es inválido");

    colocaSiError(errores, telefono, validaLongitud(telefono.value, 8, 10));
    if(!/^[0-9]{8,10}$/.test(telefono.value))
        anadeError(errores, telefono, "El teléfono es inválido");

    if(tipoevento.value === '')
        anadeError(errores, tipoevento, "Especifique el evento");

    colocaSiError(errores, fecha, validaFecha());
    if(fecha.value === '')
        anadeError(errores, fecha, "Especifique la fecha del evento");
    
    if(horario.value === '')
        anadeError(errores, horario, "Especifique el horario del evento");

    //colocaSiError(errores, curp, validaLongitud(curp.value, 8, 10));
    //curp, LETRA NUMERO O NUMERO NUMERO
    colocaSiError(errores, curp, validaLongitud(curp.value, 18, 18));
    if(!/^([A-Z]{4}[0-9]{2}(1[0-2]|0[0-9])([0-2][0-9]|3[0-1])[HM][A-Z]{2}[A-Z]{3}[0-9]{2})|([A-Z]{4}[0-9]{2}(1[0-2]|0[0-9])([0-2][0-9]|3[0-1])[HM][A-Z]{2}[A-Z]{4}[0-9]{1})$/.test(curp.value))
        anadeError(errores, curp, "El curp es inválido");


    if(errores.size != 0){
        e.preventDefault();
        console.log(errores);
        eliminame.forEach((elemdel) => {
            elemdel.parentNode.childNodes.forEach((atribquita) => {
                if(atribquita.classList != undefined)
                    atribquita.classList.remove("invalid");
            });
           elemdel.remove();
        });
        eliminame = [];
        errores.forEach((eErrores, elemento) => {
            console.log(elemento);
            console.log(eErrores);
            var mensajeError = "";
            eErrores.forEach((textoError) => {
                mensajeError += textoError + "; ";
            });
            let reganaText = document.createElement("span");
            reganaText.classList.add("helper-text");
            reganaText.setAttribute("data-error", mensajeError);
            elemento.after(reganaText);
            eliminame.push(reganaText);
            elemento.parentNode.childNodes.forEach((nodocoloca) => {
                if(nodocoloca.classList != undefined)
                    nodocoloca.classList.add("invalid");

            });
        });
        M.updateTextFields();
    }
    else{
        if(tipoevento.value == 'otro'){
            tipoevento.value = otroevento.value;
            otroevento.setAttribute(disabled, true);
        }
    }
});

form.addEventListener("reset", (e) => {
    eliminame.forEach((elemdel) => {
        elemdel.remove();
    });
    eliminame = [];
});

tipoevento.addEventListener("change", (e) => {
    console.log(tipoevento.value);
    if(tipoevento.value == 'otro'){
        otroevento.removeAttribute("hidden");
        otroevento.setAttribute("required", true);
        return;
    }
    otroevento.setAttribute("hidden", true);
    otroevento.removeAttribute("required");
});

//evento que hace que el horario cambie dependiendo el dia que se elija en fecha
fecha.addEventListener('change', (e)=>{
    const fechaSelec = new Date(fecha.value);
    const dia = fechaSelec.getDay();
    let instanciaSelect = M.FormSelect.init(horario);

    if (dia === 4){//Es viernes
        instanciaSelect.destroy();
        horario.innerHTML = ' ';
        addOption("12:00pm-5:00pm");
        addOption("7:00pm-12:00am");
        instanciaSelect = M.FormSelect.init(horario);

    }else if (dia === 5 ){//es sábado
        instanciaSelect.destroy();
        horario.innerHTML = ' ';
        addOption("2:00pm-7:00pm");
        addOption("9:00pm-2:00am");
        instanciaSelect = M.FormSelect.init(horario);
    }else if (dia === 6){//es domingo
        instanciaSelect.destroy();
        horario.innerHTML = ' ';
        addOption("9:00am-2:00pm");
        instanciaSelect = M.FormSelect.init(horario);
    } else {//es un día no válido
        instanciaSelect.destroy();
        horario.innerHTML = ' ';
        addOption("Sin fechas disponibles");
        instanciaSelect = M.FormSelect.init(horario);
    }
});

const btnAceptar = document.getElementById("aceptar");
const btnModificar = document.getElementById("modificar");

function Aceptar(){
    console.log("Los datos se han guardado en la base de datos");
    /* GUARDAR DATOS EN LA BASE DE DATOS*/
}

function Modificar(){
    window.location.href = "form.html";
    /* Hacer que los datos de precarguen*/
}


