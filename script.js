function getCoordinates(){
 try{
    navigator.geolocation.getCurrentPosition(display);
    document.getElementById("background").style.display = "flex"
 }catch{
    document.getElementById("lat").innerHTML = "Unable to obtain latitude";
    document.getElementById("long").innerHTML = "Unable to obtain longitude"
 }
}

function display(position){
    document.getElementById("lat").innerHTML = position.coords.latitude;
    document.getElementById("long").innerHTML = position.coords.longitude;
    }
    function unDisplay (){
        document.getElementById("background").style.display = "none"
    }    
window.onclick = function(event){
    if (event.target ==  document.getElementById("background")){
        document.getElementById("background").style.display = "none"
    }
}