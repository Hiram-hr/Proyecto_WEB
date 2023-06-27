function carga(){
                $.getJSON("php/getregistros.php", function(resultregjson){
                $.each(resultregjson, function(k,idcon) {
                    $("#contratados")
                    .append("<a href='/form.html?"+$.param({
                        id: idcon
                    })
                        + "' class='collection-item'>" + idcon + "</a>"
                    )
                    .append("<a href='/php/eliminaregistro.php?"+$.param({
                        id: idcon
                    })
                        + "' class='collection-item'> Eliminar " + idcon + " </a>"
                    );
                });
            });
}


$(document).ready(function(){
     $.getJSON("php/soyadmin.php", function(soyjson){
         if(soyjson["resultado"] == "si"){
            $("#login").hide();
            $("#sini").show();
            carga();
        }
     });
});
$("#ingresar").on("click", function(){
    $.post("php/adminlogin.php", $("#formlogin").serialize(), function(resultito){
        var resultjson = JSON.parse(resultito);
        if(resultjson["resultado"] == "exito"){
            $("#login").hide();
            $("#sini").show();

            carga();
        }
    });
});


