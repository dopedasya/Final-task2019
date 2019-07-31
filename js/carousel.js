
var left = 0;

function sliderLeft(){
    var polosa = document.getElementById('polosa');
   left = left - 200;
   if(left < -550){
    left = -550;
   }
   polosa.style.left = left+'px'; 
}
function sliderRight(){
    var polosa = document.getElementById('polosa');
    left = left + 200;
    if(left > 0){
        left = 0;
    }
    polosa.style.left = left+'px'; 
 }