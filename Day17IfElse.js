/*function Toggle(btn) {
    var img=document.getElementById("image");
   var display= img.style.display;
   if(display == "none") {
     img.style.display="block";
     btn.innerHTMl="Hide";
   }
   else {
    img.style.display="none";
    btn.innerHTMl="Show";
   }
    
}
*/

function Toggle(btn) {
    var img=document.getElementById("image");
   var display= img.style.display;
   if(img.className == "animate__animated animate__zoomIn") {
     img.className="animate__animated animate__zoomOut";
   }
   else {
    img.className="animate__animated animate__zoomIn";
   }

}