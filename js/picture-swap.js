/* 
function swap1(){
    var fElement = document.getElementById('main-picture'),
    style = window.getComputedStyle(fElement),
    bgF = style.getPropertyValue('background-image');
 

    var sElement = document.getElementById('next-picture-1'),
    style = window.getComputedStyle(sElement),
    bgS = style.getPropertyValue('background-image');
    var a = bgF;
    bgF = bgS;
    bgS = a;
        console.log(bgF);
  (function(){
    var jopa = document.getElementById('main-picture');
    var jopaStyle = jopa.style;
    jopaStyle.backgroundImage = "'"+ bgF + "'"; 
  })();
} */
function swap1(){
  var mainElement = document.getElementById('main-picture');
    var mainStyle = window.getComputedStyle(mainElement);
    var bgS = mainStyle.getPropertyValue('background-image');
  console.log(bgS);

  var nextElement1 = document.getElementById('next-picture-1');
  var nextStyle1 = window.getComputedStyle(nextElement1);
  var bgN1 = nextStyle1.getPropertyValue('background-image');
console.log(bgN1);

document.getElementById('main-picture').style.backgroundImage = bgN1;
document.getElementById('next-picture-1').style.backgroundImage = bgS;
}


function swap2(){
  var mainElement = document.getElementById('main-picture');
    var mainStyle = window.getComputedStyle(mainElement);
    var bgS = mainStyle.getPropertyValue('background-image');
  console.log(bgS);

  var nextElement2 = document.getElementById('next-picture-2');
  var nextStyle2 = window.getComputedStyle(nextElement2);
  var bgN2 = nextStyle2.getPropertyValue('background-image');
console.log(bgN2);

document.getElementById('main-picture').style.backgroundImage = bgN2;
document.getElementById('next-picture-2').style.backgroundImage = bgS;
}




function swap3(){
  var mainElement = document.getElementById('main-picture');
    var mainStyle = window.getComputedStyle(mainElement);
    var bgS = mainStyle.getPropertyValue('background-image');
  console.log(bgS);

  var nextElement3 = document.getElementById('next-picture-3');
  var nextStyle3 = window.getComputedStyle(nextElement3);
  var bgN3 = nextStyle3.getPropertyValue('background-image');
console.log(bgN3);

document.getElementById('main-picture').style.backgroundImage = bgN3;
document.getElementById('next-picture-3').style.backgroundImage = bgS;

}