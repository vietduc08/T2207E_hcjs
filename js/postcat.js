function forecastAjax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        var data = JSON.parse(this.responseText);
        

    }
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("GET",url,true);
    xhttp.send();
}
forecastAjax();