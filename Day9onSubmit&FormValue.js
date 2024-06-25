/*function changeColor(idValue) {
  var input=  document.getElementById("color-picked");
  var h1=document.getElementById(idValue);
  h1.style.color=input.value ;
}
*/

//==========================================================

function login(event) {
    event.preventDefault();
   var username= document.getElementById("username");
  var password= document.getElementById("password");
 // alert(username.value);
  //alert(password.value);
 // console.log(username.value);
  //console.log(password.value);
  var usernameview=document.getElementById("username-view");
  var passwordview=document.getElementById("password-view");
  passwordview.innerHTML=password.value ;
  usernameview.innerHTML=username.value ;
}