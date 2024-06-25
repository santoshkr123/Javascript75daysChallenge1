/*
1.document.forms
2.document.body
3.ducumnent.getElementById()
4.document.getElementByClassName()
5.documnent.getElementByTagName();
*/
/*====getElementByClassName=========
var btn = document.getElementsByClassName("btn");
for(var i=0 ;i<btn.length; i++)
{
    btn[i].style.color ="red";
    btn[i].style.border = "none";

}
*/
/*=======getElementByTageName=============

var btn = document .getElementsByTagName("button");
for(var i= 0;i<btn.length;i++)
{
    btn[i].style.color = "red";
    btn[i].style.border = "none";
}

*/

/*============
var btn = document .getElementById("btn");
var btn2 = document.getElementById("btn2");
var heading = document.getElementById("heading");


btn.onclick=function() {
    heading.style.color ="red";
}

btn2.onclick=function() {
    heading.style.color ="orange" ;
}

*/

var bnt = document.getElementsByClassName("bnt");

for(var i=0;i<bnt.length;i++)
{
    bnt[i].onclick=function() {
        this.style.color="white";
        this.style.background= "blue";
        this.style.border = "none";

    }
}
