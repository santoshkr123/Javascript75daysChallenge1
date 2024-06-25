//first method to get data from input//
/*function signup(event) {
    event.preventDefault();
    var firstName=document.getElementById("firstName");
    var lastName=document.getElementById("lastName");
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    console.log(
        firstName.value ,lastName.value ,email.value ,password.value
    )
    
}
*/
/*-----second method to get data from input
function signup(event) {
    event.preventDefault();
    var form=document.forms.register;
    var firstName=form.elements.firstName;
    var lastName=form.elements.lastName;
    var email=form.elements.email;
    var email=form.elements.password;
    console.log(
        firstName.value,
        lastName.value,
        email.value,
        password.value
    )

}

*/

function signup(event) {
    event.preventDefault();
    var form=document.forms.register;
    var user={
        firstName:form.elements.firstName.value,
        lastName:form.elements.lastName.value,
        email:form.elements.email.value,
        password:form.elements.password.value
    }
    console.log(user);

}