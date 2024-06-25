//Global and local scope variable
//Gloabal scope variable
var name="Santosh";

function scope() {
    console.log("Hello" +name);
}
scope();

//local scope

function scope() {
    var name="Dantosh";
    console.log("hello" +name);
}
scope();

