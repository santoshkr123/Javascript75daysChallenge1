/*
function create() {
    var h1 = document.createElement("h1");
    h1.innerHTML = "coding ott";
    h1.style.color="red";
    h1.id="my-heading";
    h1.className="my-classname";
    var body = document.body;
    body.append(h1);
}
*/


function elementCreator(event) {

   event.preventDefault();
   var form =document.forms['element-form'];
   var elementName = form.elements.element.value;
   var text  =  form.elements.text.value;
   var tag =document.createElement(elementName);
   tag.innerHTML =text;
   var result =document .getElementById("result");
   result.append(tag);

   //select dynamic elements

   var elements =document.getElementsByClassName("elements")
    for(var i=0; i<elements.length; i++)
    {
        elements[i].onclick = function() {
            alert();
        }
    }

}