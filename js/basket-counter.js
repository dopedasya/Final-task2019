
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}

    function ready(){
var qty1 = document.getElementById('qty-1').value;
var qty2 = document.getElementById('qty-2').value;
var qty3 = document.getElementById('qty-3').value;
var basket = document.getElementById('basket-counter');
var updateBasket1 = document.getElementById('qty-1').addEventListener('click', changeBasket1);
var updateBasket2 = document.getElementById('qty-2').addEventListener('click', changeBasket1);
var updateBasket3 = document.getElementById('qty-3').addEventListener('click', changeBasket1);

changeBasket();
function changeBasket(){
    var basket = document.getElementById('basket-counter');
    var sum = +qty1 + +qty2 + +qty3;
        basket.innerHTML = '(' + sum + ')';
    }

function changeBasket1(){
    var qty1 = document.getElementById('qty-1').value;
    var qty2 = document.getElementById('qty-2').value;
    var qty3 = document.getElementById('qty-3').value;

    var basket = document.getElementById('basket-counter');
    var sum = +qty1 + +qty2 + +qty3;
        basket.innerHTML = '(' + sum + ')';
    }
    var product1 = document.getElementById('prod1');
    var product2 = document.getElementById('prod2');
    var product3 = document.getElementById('prod3');

    var close1 = document.getElementById('close1').addEventListener('click',deleteProd1);
    var close2 = document.getElementById('close2').addEventListener('click',deleteProd2);
    var close3 = document.getElementById('close3').addEventListener('click',deleteProd3);

    function deleteProd1(){
        product1.style.display = 'none';
        document.getElementById('qty-1').value = 0;
        changeBasket1();
       }
    function deleteProd2(){
        product2.style.display = 'none';
        document.getElementById('qty-2').value = 0;
        changeBasket1();
       }
    function deleteProd3(){
        product3.style.display = 'none';
        document.getElementById('qty-3').value = 0;
        changeBasket1();
       }   
}

 