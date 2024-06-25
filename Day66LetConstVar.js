/*
function demo(){
    let a=10;
    if(a>8)
    {
        let res="length is acceped";
    }
    console.log("success");
}
*/

/*
const demo =()=>{
    const a=10;
    const b=20;
    const c=a+b;
    alert(c);
}
*/
/*
window.onload=()=>{
    const btn=document.getElementById("demo");
    btn.onclick=()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')

        .then(res=>res.json())

    
        .then((data)=>console.log(data));

        .catch((err)=>console.log(err));
        
    }
}
*/

/*
window.onload=()=>{
    const btn=document.getElementById("demo");
    btn.onclick=()=>{
        let sum=0;
        const data=[4,5,6,7];
        for(let item of data)
        {
            sum+=item;
        }
        console.log(sum);
    
    }
}
*/
window.onload=()=>{
    const btn=document.getElementById("demo");
    btn.onclick=()=>{
        const data=[4,5,8,10,12,18];
        const result=data.filter((item)=>{
          return  item>8;
        })
        console.log(result);

        
    }
}

