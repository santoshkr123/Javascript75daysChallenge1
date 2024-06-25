var menu=document.getElementsByClassName("menu");

for(var i=0;i<menu.length; i++)
{
    menu[i].onclick=function() {
        animator(this.value);

        var title=document.getElementById("title");
        title.className=this.value;
    }
}

var darkButton =document.getElementById("dark-button");
darkButton.onclick=
      function(){
    var section =document.getElementById("section");
    var sidenav =document.getElementById("sidenav");
    var title=document.getElementById("title");
    var desc=document.getElementById("desc");
    var button =document.getElementsByTagName("button");



    if(section.style.background == "rgb(17,17,17)")
    {
        section.style.background="#FCE5CD";
    sidenav.style.background="F7D7B5";
    sidenav.style.color="black";
    title.style.color="#351C75";
    desc.style.color="EBA45A";

      for(var i=0;i<button.length;i++)
      {
        button[i].style.color="black";
      }
    }
    else 
    {
    section.style.background="#111111";
    sidenav.style.background="#15151D";
    sidenav.style.color="white";
    title.style.color="#4672FE";
    desc.style.color="white";

    for(var i=0;i<button.length;i++)
    {
        button[i].style.color ="black";
    }
    }
}





