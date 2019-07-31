function addToCart(){
        var button = document.getElementById('button');
        button.style.backgroundColor = '#008000';
        button.innerHTML = 'product added';
        var basket = document.getElementById('basket-c');
        var basketCount = basket.value;
        if(basketCount == undefined){
            basketCount = 0;
        }else{
        }
        var basket = document.getElementById('basket-c');
        basketCount = +basketCount + 1 ;
        basket.innerHTML = basketCount;
        document.getElementById('basket-c').value = basketCount ;
    }
    