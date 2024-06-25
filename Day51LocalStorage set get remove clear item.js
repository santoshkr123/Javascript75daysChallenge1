/*
function store(){
   localStorage.setItem("Roll",1603057);
}

function read() {
    var data=localStorage.getItem("Roll");
    alert(data);
}

function deleteData() {
    localStorage.removeItem("Roll");
}

*/


window.onload= function() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var rememeber =document.getElementById("remember");
    rememeber.onchange =function() {
        var checked=this.checked;
        if(checked)
        {
            localStorage.setItem("username",username.value);
            localStorage.setItem("password",password.value);

        }

        else{
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

    }

    //show username and password 
    var usernameData =localStorage.getItem("username");
    var passwordData = localStorage.getItem("password");

    if(usernameData!=null)
    {
    username.value =usernameData;
    password.value =passwordData;
    rememeber.checked=true;
    }
}