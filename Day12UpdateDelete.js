function signup(event) {
    event.preventDefault();
    var modal=document.getElementById("modal");
    var form=document.forms.register;
    var user={
        firstName:form.elements.firstName.value,
        lastName:form.elements.lastName.value,
        email:form.elements.email.value,
        password:form.elements.password.value
    }
    modal.style.display="flex";
    


}

function closeModal(){
    var modal=document.getElementById("modal");
    modal.style.display="none";
}




