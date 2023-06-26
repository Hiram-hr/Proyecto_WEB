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
const evento = document.getElementById("evento");
const otroev = document.getElementById("otroev");
const salon = document.getElementById("salon");
const confirma = document.getElementById("confirma");
const personas = document.getElementById("personas");
const botonregistra = document.getElementById("registra");
const idcontrato = new URLSearchParams(window.location.search).get("id");
var errores = new Map();
var eliminame = new Array();

const form = document.getElementById("form");
const coleccionErrores = document.getElementById("errores");
const boton = document.getElementById("btn");

function rk(obj, ok, nk){
    obj[nk] = obj[ok];
    delete obj[ok];
}

document.addEventListener("DOMContentLoaded", function() {
    optselect = {};
    $.ajaxSetup({ async: false });
    $.getJSON("php/geteventos.php", function(result){
        var rev = [];
        var p;
        for(var i = 1; (p = result[""+i]) != undefined; i++){
            rev.push(p);
        }
        for(var i = rev.length; i >= 1; i--){
            $(evento).append($("<option>", {
                value:""+i,
                text:rev[i-1]
            }));
        }
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
    if(idcontrato != null){
        $.getJSON("php/getregistro.php", {
            id:idcontrato
        }, function(result){
            var ndatos = new Map();
            $.each(result, function(val, txt){
                nval = val.replace(/^id_/, '');
                ndatos[nval] = txt;
            });
            salon.value = ndatos["salon"];

        });
    }

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

botonregistra.addEventListener("click", (e) => {
    errores.clear();

    var regnom = /^[\s,\.A-Za-záéíóúñÁÉÍÓÚÑ]{2,25}$/;

    vald([nombre, appat, apmat, calle, colonia], regnom, 2, 25);
    vald([estado, menu, evento, salon, personas,horario], /^[0-9]+$/, 1, Infinity);
    vald(numero, /^[0-9]{1,8}$/, 1, 8);
    vald(telefono, /^[0-9]{8,10}$/, 8,10);
    vald(cp, /^[0-9]{5}$/, 5, 5);
    vald(curp, /^[A-Z]{4}[0-9]{2}(1[0-2]|0[1-9])([1-2][0-9]|0[1-9]|3[0-1])(H|M)[A-Z]{2}[A-Z]{3}[0-9]{2}$/, 18, 18);
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
    if(evento.value == 'otro')
        vald(otroev, regnom, 2, 25);

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
        //Enviar aca
        $.post("php/registra.php", $(form).serialize());
    }
});

form.addEventListener("reset", (e) => {
    eliminame.forEach((elemdel) => {
        elemdel.remove();
    });
    eliminame = [];
});

evento.addEventListener("change", (e) => {
    console.log(evento.value);
    if(evento.value == '1'){
        otroev.removeAttribute("hidden");
        otroev.setAttribute("required", true);
        return;
    }
    otroev.setAttribute("hidden", true);
    otroev.removeAttribute("required");
});

estado.addEventListener("change", (e) => {
    console.log(evento.value);
    M.FormSelect.getInstance(alcaldia).destroy();
    if(estado.value == '1'){
        $(alcaldia).prop("disabled", false);
        M.FormSelect.init(alcaldia, {});
        return;
    }
    $(alcaldia).prop("disabled", true);
     M.FormSelect.init(alcaldia, {});
});

function colocaHoras(){
    if(salon.value != ''){
        if(fecha.value != ''){
            if(idcontrato != null){
                $.getJSON("php/gethorarios.php",{
                    id_salon: salon.value,
                    dia: fecha.value,
                    id: idcontrato
                },
                function(result){
                    M.FormSelect.getInstance(horario).destroy();
                    $(horario).empty();
                    $.each(result, function(val, txt){
                        $(horario).append($("<option>", {
                            value:val,
                            text:txt
                        }));
                    });
                    M.FormSelect.init(horario, {});
                });
            }
            else{
                $.getJSON("php/gethorarios.php",{
                    id_salon: salon.value,
                    dia: fecha.value
                },
                function(result){
                    M.FormSelect.getInstance(horario).destroy();
                    $(horario).empty();
                    $.each(result, function(val, txt){
                        $(horario).append($("<option>", {
                            value:val,
                            text:txt
                        }));
                    });
                    M.FormSelect.init(horario, {});
                });
            }
        }
    }
}

salon.addEventListener("change", (e) => {
    colocaHoras();
});

fecha.addEventListener("change", (e) => {
    colocaHoras();
});
