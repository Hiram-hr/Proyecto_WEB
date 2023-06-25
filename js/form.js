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
const salon = document.getElementById("salon");
const confirma = document.getElementById("confirma");
var errores = new Map();
var eliminame = new Array();

const form = document.getElementById("form");
const coleccionErrores = document.getElementById("errores");
const boton = document.getElementById("btn");

document.addEventListener("DOMContentLoaded", function() {
    optselect = {};
    $.ajaxSetup({ async: false });
    $.getJSON("php/geteventos.php", function(result){
        $.each(result, function(val, txt){
            $(tipoevento).append($("<option>", {
                value:val,
                text:txt
            }));
        });
    });

   $.getJSON("php/getalcaldias.php", function(result){
        $.each(result, function(val, txt){
            $(alcaldia).append($("<option>", {
                value:val,
                text:txt
            }));
        });
    });

   $.getJSON("php/getsalones.php", function(result){
        $.each(result, function(val, txt){
            $(salon).append($("<option>", {
                value:val,
                text:txt
            }));
        });
    });

   $.getJSON("php/getestados.php", function(result){
        $.each(result, function(val, txt){
            $(estado).append($("<option>", {
                value:val,
                text:txt
            }));
        });
    });

    $.getJSON("php/getmenu.php", function(result){
        $.each(result, function(val, txt){
            $(menu).append($("<option>", {
                value:val,
                text:txt
            }));
        });
    });

    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, optselect);

    //Inicializar elemento de fecha del form
    const hoy = new Date();
    const options = {"format":"yyyy-mm-dd",
                     "minDate": hoy,
                     "defaultDate": hoy,
                     "setDefautDate": true
                     };
    M.Datepicker.init(fecha, options);

});

function validaLongitud(valida, min, max){
    console.log(valida);
    var mensajes = [];
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
/*
function validaSelect(valida, vacioPermitido){
    var mensajes = [];
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

function vald(objetos, regex, min, max){
    if(!(objetos instanceof Array))
        objetos = [objetos];
    console.log(objetos);
    objetos.forEach((objeto) => {
        colocaSiError(errores, objeto, validaLongitud(objeto.value, min, max));
        if(objeto.value === '')
            return;
        if(!regex.test(objeto.value)){
            var nombreobj = document.querySelector("label[for='" + objeto.id + "']").textContent;
            anadeError(errores, objeto, nombreobj + " es inválido");
        }
    });
}

function colocaSiError(mapaErrores, objeto, errores){
    if(errores.length)
        anadeError(mapaErrores, objeto, errores);
}

form.addEventListener("submit", (e) => {
    errores.clear();

    var regnom = /^[\s,\.A-Za-záéíóúñÁÉÍÓÚÑ]{2,25}$/;

    vald([nombre, appat, apmat, calle, colonia], regnom, 2, 25);
    vald([estado, alcaldia, menu, tipoevento], /^[1-9]+$/, 1, Infinity);
    vald(numero, /^[0-9]{1,8}$/, 1, 8);
    vald(telefono, /^[0-9]{8,10}$/, 8,10);
    vald(cp, /^[0-9]{5}$/, 5, 5);
    vald(curp, /^[A-Z]{4}[0-9]{2}(1[0-2]|0[1-9])([1-2][0-9]|0[1-9]|3[0-1])(H|M)[A-Z]{2}[A-Z]{3}[0-9]{2}$/, 13, 13);
    if(!errores.has(curp)){
        var hoy = new Date();
        var curpstr = curp.value;
        var an = parseInt(curpstr.substr(4,2));
        console.log(an);
        an += (hoy.getFullYear() - (hoy.getFullYear() % 100)) - ((an < (hoy.getFullYear() % 100)) ? (0) : (100));

        var mes = parseInt(curpstr.substr(6, 2)) - 1;
        var dia = parseInt(curpstr.substr(8, 2));
        var fechanac = new Date(an, mes, dia);
        var edad = Math.abs(hoy - fechanac) / (1000*60*60*24*365);
        if( edad < 18 )
            anadeError(errores, curp, "Los menores de edad no pueden contratar eventos");
    }
    vald(correo, /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/, 6, 254)
    if(tipoevento.value == 'otro')
        vald(otroevento, regnom, 2, 25);

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
            var reganaText = document.createElement("span");
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

