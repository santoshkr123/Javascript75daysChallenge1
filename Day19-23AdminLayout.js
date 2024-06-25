function toggle() {
    var sidenav=document.getElementById("sidenav");
    var section=document.getElementById("section");
    var topnav=document.getElementById("topnav");
    var width=sidenav.style.width;
    if(width == '0px') {
        sidenav.style.width='250px';
        sidenav.style.transition='0.3s';
        topnav.style.left="250px";
        topnav.style.width="100%";
        section.style.marginLeft="250px";
        section.style.width="100%";
        section.style.transition="0.3s";
    }
    else {
        sidenav.style.width= "0px";
        sidenav.style.transition='0.3s';
        topnav.style.left ="0px";
        topnav.style.width="100%";
        topnav.style.transition="0.3s";
        section.style.marginLeft ="0px";
        section.style.width="100%";
        section.style.transition="0.3s";
    }
}

function tab(activeBtn,inactiveBtn,activeId,InactiveId) {
    var active=document.getElementById(activeId);
    var InactiveId=document.getElementById(InactiveId);
    var activeButton =document.getElementById(activeBtn);
    var inactiveButton =document.getElementById(inactiveBtn);

    activeButton.style.background= "darkorange";
    activeButton.style.color="white";
    inactiveButton.style.background ="white";
    inactiveButton.style.color="black";
    active.style.display="block";
    InactiveId.style.display="none";
}

function signup(event) {
    event.preventDefault();
    var user={};
    var form=document.forms.signupForm;
    var fullname=form.elements.fullname;
    var fullnameMessage =document.getElementById("fullname-message");
    var email=form.elements.email;
    var emailMessage= document.getElementById("email-message");
    var password=form.elements.password;
    var passwordMessage= document.getElementById('password-Message')
    if(fullname.value.length == 0)
    {
        fullname.style.borderColor ="red";
        fullnameMessage.style.display ="block";
         fullnameMessage.innerHTML = "Fullname is required !" ;
    }
    else if(email.value.trim().length == 0)
    {
        email.style.borderColor ="red";
        emailMessage.style.display="block";
        emailMessage.innerHTML ="Email is required";
        emailMessage.style.color= "red";
    }
    else if(password.value.trim().length ==0)
    {
        password.style.borderColor ="red";
        passwordMessage.style.display ="block";
        passwordMessage.innerHTML ="Password is required";
        passwordMessage.style.color ="red";
    }
    else if(password.value.trim().length < 8)
    {
        password.style.borderColor ="red";
        passwordMessage.style.display ="block";
        passwordMessage.innerHTML ="Minimum 8 character password is required";
        passwordMessage.style.color ="red";
    
    }
    else {
        user.fullname =fullname.value.trim();
        user.email = email.value.trim();
        user.password =password.value.trim();
        console.log(user);

    }

}

function onInputValidation(input ,messageId) {
    var message = document.getElementById(messageId);
    input.style.borderColor = "#ccc" ;
    message.style.color = "inherit";
    message.innerHTML ="";
    message.style.display = "none" ;
}

function togglePassword(idOfInput) {
    var password=document.getElementById(idOfInput);
    var toggleIcon = document.getElementById("toggle-icon");
    if(password.type == password)
    {
        password.type ="text";
        toggleIcon.className = "fa fa-eye-slash";
    }
    else {
        password.type="password";
        toggleIcon.className = "fa fa-eye" ;
    }
}

function login(event) {
    event.preventDefault();
    var user={};
    var form=document.forms.loginForm;
    var emailMessage = document.getElementById('login-email-message')
    var email =form.elements.email;
    var password=form.elements.password;
    var passwordMessage = document.getElementById('login-password-message')
    if(email.value.trim().length == 0)
    {
        email.style.borderColor ="red";
        emailMessage.style.display = "block";
        emailMessage.style.color ="red";
        emailMessage.innerHTML="Email is required!";

    }

    else if (password.value.trim().length  ==  0)
    {
        password.style.borderColor ="red";
        passwordMessage.style.display = "block";
        passwordMessage.style.color ="red";
        passwordMessage.innerHTML= "password is required!"

    }
    else
    {
        user.email=email.value.trim();
        user.password=password.value.trim();
        console.log(user);
        
    }

}