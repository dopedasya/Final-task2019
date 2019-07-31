var ready;
var input ;
function search(a){

    input = (document.getElementById('search-input').value);
    if (ready == true){


        if(input == 0 || input == null){
            document.getElementById("search-input").style.display = "none"; 
            ready = false
        }else{
            ready = false;
            return location.href = 'category-all.html';
        } 
    }else{
        document.getElementById("search-input").style.display = "block";
        ready = true;
    }
}


function search2(a){

    input = (document.getElementById('search-input').value);
    if (ready == true){


        if(input == 0 || input == null){
            document.getElementById("search-input").style.display = "none"; 
            ready = false
        }else{
            ready = false;
            return location.href = 'home.html';
        } 
    }else{
        document.getElementById("search-input").style.display = "block";
        ready = true;
    }
}