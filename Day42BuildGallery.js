
window.onload = function() {
    var uploadInput =document.getElementById("upload-input");
    uploadInput.onchange  = function() {
        var container =document.getElementById("container");

        var files=this.files[0];
        for(var i=0;i<files.length;i++)
        {
            var file=files[i];
        
        var url=URL.createObjectURL(file);
        var button =document.createElement("button");
        button.className = "image";
        var image=document.createElement("img");
        image.src=url;
        var action=document.createElement("div");
        action.className="action"

        //Delete icon
        var deleteIconButton=document.createElement("button");
        var deleteIcon = document.createElement("i");
        deleteIconButton.className="icon-button delete-icon";
        deleteIcon.className ="fa fa-trash";
        deleteIconButton.append(deleteIcon);

        //View icon
        var viewIconButton =document.createElement("button");
        var viewIcon = document.createElement("i");
        viewIconButton.className="icon-button delete-icon";
        viewIcon.className ="fa fa-eye";
        viewIconButton.append(viewIcon);

         //setting icon button to action div
        action.append(deleteIconButton);
        action.append(viewIconButton);

        //Setting action div to image
        button.append(img);
        button.append(action);
        container.append(button);

        
        }
    
     var deleteIcons = document.getElementsByClassName("delete-icon");
     var viewIcons = document.getElementsByClassName("delete-icon");
     

     for(var i= 0;i<deleteIcons.length; i++)
     {
        deleteIcon[i].onclick = function() {
           var image=this.parentElement.parentElement;
           image.remove(); 

           //check for empty
           if(deleteIcons.length==0)
           {
            empty.style.display="block";

           }
        }
        viewIcons[i].onclick = function() {
            var button=this.parentElement.parentElement;
            const img =button.getElementsByTagName("img");
            var url=[0].src; 
            Swal.fire({
                width:1080,
                imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adorama.com%2Falc%2Fbasic-landscape-photography-tips%2F&psig=AOvVaw1OmH7GvwjjQGjFPfGqP22j&ust=1713527208047000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCSv7bYy4UDFQAAAAAdAAAAABAE',
                imageWidth:1080,
                showConformButton:false
            })
        }
     }
    }
}