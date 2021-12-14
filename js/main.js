////mapa//

$("#maps").hide();

$("#btnMaps").click(function(){
    
    $("#maps").toggle(1500);
});



///api///

$.ajax({
    url:'http://api.openweathermap.org/data/2.5/weather',
    type:"GET",
    data:{
        q:'Buenos Aires',
        appid: 'bbf8893c6e8030e157bb633d11a66e17',
        dataType:"jsonp",
        units: 'metric'
    },
    success:function(data){
        console.log( data);
        let icono = data.weather[0].icon;
        let iconoURL = "http://openweathermap.org/img/w/" + icono + ".png";
        $("#icono").attr("src" , iconoURL);
        let contenido = `<div>
                            <p>${data.name}</p>
                            <p>${data.weather[0].main}</p>
                            <p>TEMP MAX: ${data.main.temp_max}</p>
                            <p>TEMP MIN: ${data.main.temp_min}</p>
                        </div>`;
        $("#caja").append(contenido);
    }
});