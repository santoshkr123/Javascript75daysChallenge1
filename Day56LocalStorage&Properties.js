window.onload=function(){
    var storageForm =document.getElementById("storage-form");
    storageForm.onsubmit=function(e) {
        e.preventDefault();
        var key =document.getElementById("key").value ;
        var data=document.getElementById("data").value;
        localStorage.setItem(key,data);
        storageForm.reset ();
        alert("sucesss");
    
    }

    //read data
    var fetchForm=document.getElementById("fetch-form");
    fetchForm.onsubmit=function(e) {
        e.preventDefault();
        var key=document.getElementById("fetch-key").value;
        var data=localStorage.getItem(key);
        alert(data);

    }

    //Remove data
    var removeForm =document.getElementById("remove-form");
    removeForm.onsubmit=function(e){
        e.preventDefault();
        var key=document.getElementById("remove-key").value;
        var data =localStorage.getItem("key");
        if(data)
        {
        localStorage.removeItem(key);
        alert("data found");
        }
        else
        {
            alert("data not found");
        }
        
    }

    //clear
    var clearbtn=document.getElementById("clear-btn");
    clearbtn.onclick=function() {
       var count= localStorage.length;
       if(count>0)
       {
        localStorage.clear();
        alert("sucess");
       }
       else
       {
        alert("sucess not found");
       }
        
    }
}