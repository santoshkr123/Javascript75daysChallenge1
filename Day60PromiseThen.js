function myCode(password) {
    return new Promise(function(resolve,reject)
{
    setTimeout(function() {
        if(password == "wap@123")
        {
            resolve("success");
        }
        else{
            reject("error");
        }
        
    },5000)
});

}

myCode("wap@123")
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
});


