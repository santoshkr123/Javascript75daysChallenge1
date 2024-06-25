/*setTimeout(function() {
    document.write("timimg");
},3000)
*/

/*for(var i=0; i<3;i++)
{
    document.write("<h1 style=font-size:30px, font-weight:bold, color:red>Hello sir</h1>");
}
*/
function findTable() {
    var num=document .getElementById("num").value ;
    var result=document.getElementById("result");
    for(var i=1; i<=10; i++)
    {
        result.innerHTML+= "<h1>"+num*i+"</h1>";
        
    }
}

var subjects = ["maths", "science","geograpgy","sst","coding"];
for(var i=0;i<subjects.length;i++)
{
console.log(subjects[i]);
}