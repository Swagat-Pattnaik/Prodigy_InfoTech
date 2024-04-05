let c=1;
function box(data){
    if(c<9){
        if(c%2==0){
            document.getElementById(data.id).innerHTML="O";
        }
        else{
            document.getElementById(data.id).innerHTML="X"
        }
        c++
        if(reasult()){
            document.getElementById("res").innerHTML="Winner";
        }
    }
    else{
        document.getElementById("res").innerHTML="Match Draw";
    }
}
function reasult(){
    if(document.getElementById("1").innerHTML!="" && document.getElementById("2").innerHTML!="" && document.getElementById("3").innerHTML!="" && document.getElementById("1").innerHTML==document.getElementById("2").innerHTML && document.getElementById("2").innerHTML==document.getElementById("3").innerHTML ||
    
    document.getElementById("4").innerHTML!="" && document.getElementById("5").innerHTML!="" && document.getElementById("6").innerHTML!="" && document.getElementById("4").innerHTML==document.getElementById("5").innerHTML && document.getElementById("5").innerHTML==document.getElementById("6").innerHTML ||

    document.getElementById("7").innerHTML!="" && document.getElementById("8").innerHTML!="" && document.getElementById("9").innerHTML!="" && document.getElementById("7").innerHTML==document.getElementById("8").innerHTML && document.getElementById("8").innerHTML==document.getElementById("9").innerHTML ||

    document.getElementById("1").innerHTML!="" && document.getElementById("4").innerHTML!="" && document.getElementById("7").innerHTML!="" && document.getElementById("1").innerHTML==document.getElementById("4").innerHTML && document.getElementById("4").innerHTML==document.getElementById("7").innerHTML ||

    document.getElementById("2").innerHTML!="" && document.getElementById("5").innerHTML!="" && document.getElementById("8").innerHTML!="" && document.getElementById("2").innerHTML==document.getElementById("5").innerHTML && document.getElementById("5").innerHTML==document.getElementById("8").innerHTML ||

    document.getElementById("3").innerHTML!="" && document.getElementById("6").innerHTML!="" && document.getElementById("9").innerHTML!="" && document.getElementById("3").innerHTML==document.getElementById("6").innerHTML && document.getElementById("6").innerHTML==document.getElementById("9").innerHTML ||

    document.getElementById("1").innerHTML!="" && document.getElementById("5").innerHTML!="" && document.getElementById("9").innerHTML!="" && document.getElementById("1").innerHTML==document.getElementById("5").innerHTML && document.getElementById("5").innerHTML==document.getElementById("9").innerHTML ||

    document.getElementById("3").innerHTML!="" && document.getElementById("5").innerHTML!="" && document.getElementById("7").innerHTML!="" && document.getElementById("3").innerHTML==document.getElementById("5").innerHTML && document.getElementById("5").innerHTML==document.getElementById("7").innerHTML
    ){
        return true;
    }
    }
    function btn(){
        location.reload();
    }
    

