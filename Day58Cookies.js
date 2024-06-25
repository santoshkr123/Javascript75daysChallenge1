
window.onload=function() {
    var storeBtn =document.getElementById("store-btn");
    storeBtn.onclick=function() {
        document.cookie="roll=1; path=/";
    }

    //read cookie multiple cookie
    var readBtn =document.getElementById("read-btn");
    readBtn.onclick=function(){
        var cookies=document.cookie;
       var stage1=cookies.split(";");
       var cookiesData ={}
       for(var i=0;i<stage1.length;i++)
       {
        var keyValue =stage1[i].trim();
        var data=keyValue.split("=");
        var key =data[0];
        var value=data[i];
        cookiesData[key] = value
       }
       console.log(cookiesData);
    }
}

/* read single key value approach
   var cookies =document.cookie;
   var data=cookies.split("=");
   var key =data[0];
   var value=data[1];
   console.log(key,value);
   */

   /*read direct cookie
   var readBtn =document.getElementById("read-btn");
   readBtn.onclick=function(){
    console.log(document.cookie);*/
    