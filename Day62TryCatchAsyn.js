/*
window.onload=function(){
    fetch('https://jsonplaceholder.typicode.com/photos',{
        method:'GET'
    })

    .then(function(res){
        return res.json;

    })
    .then(function(data){
        console.log(data);

    })

    .catch(function(err){
        console.log(err);
    });
    
}
*/
window.onload= async function() {

    
        var loader=document.getElementById("loader");
    try{
        loader.style.display="block";

        var res= await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20',{
            method:'GET'
        })
        var data=await res.json();
        var container =document.getElementById("container");

        
        for(var i=0;i<data.length;i++)
        {
            var item=data[i];
            var card=`
             <div class="card">
             <img src="${item.thumbnailUrl}"/>
             <div>
             <h1>${item.title}</h1>
             <a href="#"${item.url}">Learn More</a>
             <button class="edit-btn" id="${item.id}">Edit</Button>
             <button class="delete-btn" id="${item.id}">Delete</Button>
             </div>

             </div>
            `
            container.innerHTML+=card;
        }
        //Put method
        var editBtn=document.getElementsByClassName("edit-btn");
        for(var j=0;j<editBtn.length;i++)
        {
            editBtn[j].onclick=async function(){
                var data =JSON.stringify({
                    id: this.id,
                    title:'foo',
                    body:'bar',
                    userId:1
                })
               var response=await fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`, {
                    method: 'PUT',
                    body:data,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      },
                        

                    
                })
                
            }
        }
        //delete request
        var deleteBtn=document.getElementsByClassName("delete-btn");
        for(var j=0;j<deleteBtn.length;i++)
        {
            deleteBtn[j].onclick=async function(){
                fetch('https://jsonplaceholder.typicode.com/posts/1',{
                    method:'DELETE'
                });
                var deleted=await response.json();
                console.log(deleted);
            }
        }

    }
    catch(err) {
        console.log(err);

    }
    finally{
         loader.style.display="none";
    }

    //POst request
    var form=document.getElementById("form");
    form.onsubmit=async function(event){
        event.preventDefault();
        var data = JSON.stringify({
            title:form[0].value,
            body:form[1].value,
            userId:form[2].value
        })
        console.log(data);

      var response=  await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body:data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        })
        var data=await response.json();
        console.log(data);
        
    }
    }
    
