/*function red() {
   var h1= document.getElementById("h1");
   h1.style.color="red";
}

function green() {
   var h1= document.getElementById("h1");
   h1.style.color="green";
}

function blue() {
    var h1=document.getElementById("h1");
    h1.style.color="blue";
}

function pink() {
    var h1=document.getElementById("h1");
    h1.style.color="pink";
}
*/

//================================================
//Parameter or Parametrized variable
function changeColor(colorName,bgColor) {
    var h1=document.getElementById("h1");
    h1.style.color=colorName;
    h1.style.backgroundColor=bgColor;
}

function bodystyle() {
  var body=document.getElementById("webpages");
  body.style.backgroundColor="red";
}