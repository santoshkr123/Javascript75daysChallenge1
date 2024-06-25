window.onload=function() {
    fetch('https://fakestoreapi.com/products',{
        method:'GET'
    })

    .then(function(response){
        return response.json();

    } )

    .then(function(data){
        var parent=document.getElementById("product");
        for(var i=0;i<data.length;i++)
        {
            var item=data[i];
            var div=`
            <div>
            <img src="${item.image}"/>
            </div>
            `
        }
        parent.innerHTML+=div;
    })
    .catch(function(err){
        console.log(err);
    })
}