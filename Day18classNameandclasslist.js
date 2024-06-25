/*function upadte() {
    var h1=document.getElementById("h1");
    h1.innerHTML="wap insitiute";
}
*/
/*function upadte() {
    var input=document.getElementById("username");
    input.value="ravi";
}
*/
/*function update() {
    var h1=document.getElementById("title");
    h1.classList.add("demo","radius");
}
*/
function update() {
    var h1=document.getElementById("title");
    var value=h1.className;
    if(value=="hide"){ 
        h1.className="show";
    }
    else 
    {
        h1.className="hide";
    }
}