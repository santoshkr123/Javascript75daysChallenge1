window.onload=function() {
    var storageForm=document.getElementById("storage-form");
    storageForm.onsubmit=function(e) {
        e.preventDefault();
        var key=document.getElementById("store-key").value;
        var data=document.getElementById("store-data").value;
        sessionStorage.setItem(key,data);
        Swal.fire({
            icon:'sucess',
            title:'Data Stored !'
        })
    }

    //Read Data
    var readForm =document.getElementById("read-form");
    readForm.onsubmit=function(e){
        e.preventDefault();
        var key=document.getElementById("read-key").value;
       var data= sessionStorage.getItem(key);
        if(data ==null)
        {
            Swal.fire({
                icon:"error",
                title:"Data Not Found !"
            })

        } 
        else
        {
            Swal.fire({
                icon:"Success",
                title:"Data Found",
                text:data
            })
        }

    }

    //Read all data
    var readNow=document.getElementById("read-now");
    readNow.onclick=function(){
        var count=sessionStorage.length;
        for(var i=0;i<count;i++)
        {
            var key=sessionStorage.key(i);
            var data=sessionStorage.getItem(key);
            Swal.fire({
                icon:"success",
                title:key,
                text:data,
                confirmButtonText:'Next'
            })
        }
    }

    //remove 
    var removeForm =document.getElementById("remove-form");
    removeForm.onsubmit=function(e){
        e.preventDefault();
        var key=document.getElementById("remove-key").value;
        var data=sessionStorage.getItem(key);
        if(data==null)
        {
            Swal.fire({
                icon:'error !',
                title:"Data Not Found"
            })
        }
        else{
            sessionStorage.removeItem(key);
            Swal.fire({
                icon:"success !",
                title:"Data Found"
            })
        }
        


    }
    //delete all adata

    var removeAll= document.getElementById("remove-all");
    removeAll.onclick=function(){
        var count=sessionStorage.length;
        if(count>0)
        {
            sessionStorage.clear();
            Swal.fire({
                icon:"success",
                title:"All deleted data !"
                

            })
        }
        else{
            Swal.fire({
                icon:"error",
                title:"You dont have data!"
            })
        }
        

}
}