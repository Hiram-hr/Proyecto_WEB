$("#ingresar").on("click", function(){
    $.post("php/adminlogin.php", $("#formlogin").serialize(), function(resultito){
        var resultjson = JSON.parse(resultito);
        if(resultjson["resultado"] == "exito"){
            $("#login").hide();
            $("#sini").show();

            $.getJSON("php/getregistros.php", function(resultregistros){
                var resultregjson = JSON.parse(resultregistros);
                $.each(resultregjson, function(k,idcon) {
                    $("#contratados")
                    .append("<a href='/form.html?"+$.param({
                        id: idcon
                    })
                        + "' class='collection-item'>" + idcon + "</a>"
                    );
                });
            });
        }
    });
});


