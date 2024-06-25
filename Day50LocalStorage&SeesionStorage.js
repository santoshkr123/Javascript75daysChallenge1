window.onload=function() {
    var btn=document.getElementById("btn");
    var data =localStorage.getItem("name");
    var p=document.getElementById("result");
    p.innerHTML=data;
    btn.onclick =function() {
       localStorage.setItem("name","Santosh Kumar");
    }
}

