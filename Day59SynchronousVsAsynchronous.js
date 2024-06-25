window.onload=function(){
    function request(name) {
        new Promise(function(resolve,reject){
            setTimeout(function(){
                if(name=="santosh")
                {

                
                resolve("success");
                }
                else{
                    reject("failed");
                }

            },2000);
            
            
        })
    }




    var btnTest=document.getElementById("btn-test");
    btnTest.onclick=function(){
        var r1=document.getElementById("result-1");
        r1.innerHTML="Loading..."

        var response =request("santosh");
        response
        .then(function(result){
            r1.innerHTML=result;
        })
        .catch(function(err){
            r1.innerHTML=err;
        })

    
    }
}

/*
setTimeout(function() {
    r1.innerHTML='result-1'
},1000)

setInterval(function(){
    var date=new Date();
   console.log( date.toLocaleDateString());
   console.log(date.toTimeString());
},1000)
r2.innerHTML="Result-2";
*/
