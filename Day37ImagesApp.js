window.onload = function() {
    var thumb = document.getElementsByClassName("thumb");
    for(var i=0;i<thumb.length;i++)
    {
        thumb[i].onclick = function() {
            for(var j=0;j<thumb.length;j++)
            {
                thumb[j].style.border = "none"
            }
            this.style .border ="5px solid black";
            var newSrc =this.src;
            var preview =document.getElementById("preview");
            preview.className="animate__animated animate__fadeIn";
            preview.src=newSrc;
            setTimeout(function(){
                preview.className = ""
            
            },500)
        }
    }
}