var x = 0;
var flag = false;
function demoEvent() {
    if(flag == false){
        var h = document.getElementById("heading");
        h.style.color = "red";
        setInterval(changText, 20);
        flag = true;
    }
}
function changText(){
    var h = document.getElementById("heading");
    h.style.transform = "rotate("+x+"deg)";
    x++;
}

//function inputSearch(obj){
  //  var ix = document.getElementById("ips");
    //console.log("searching:" + ix.value);
// }
function inputSearch(obj){
 //   var ix = document.getElementById("city");
    console.log("searching:"+obj.value);
}

function demoEvent2(){
    var ips = document.getElementsByName("input");// array
    for (var i=0; i<ips.length; i++){
        ips[i].style.backgroundColor = "deeppink";
    }

}