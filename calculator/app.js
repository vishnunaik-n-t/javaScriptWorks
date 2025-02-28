function clr(val){
    document.getElementById("result").value="";
}

function display(val){
    document.getElementById("result").value+=val;
}

function equate(){
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}