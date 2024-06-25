var result=document.getElementById("result");
var alertp=document.getElementById("alert");
function input(num) {
    
    result.value +=num;
}

function calc() {
    
    var output=eval(result.value);
    result.value=output;
}

function cancel() {
    result.value="";
}
function even() {
    var num=result.value;
    if(num%2==0){
        alertp.innerHTML="Even Number";
        alertp.style.color="dodgerblue";
        result.value="";
    }
    else {
        alertp.innerHTML="This is not a  Even Number";
        alertp.style.color="red";
        result.value="";
    }
}

function odd() {
    var num=result.value;
    if(num%2!=0) {
        alertp.innerHTML="Odd Number";
        alertp.style.color="dodgerblue";
    }
    else {
        alertp.innerHTML="This is not a Odd Number";
        alertp.style.color="red";
        
    }
}