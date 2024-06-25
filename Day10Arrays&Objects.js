//-------------Arrays-------------------//
//var arr=["santosh",1234,5897,'a'];
/*alert(arr[0]);
alert(arr[1]);
alert(arr[2]);
alert(arr[3])
*/
//console.log(arr[0],arr[1],arr[2],arr[3]);
//==============================================
/*var teachers=[
    "Rahul",
    "Santosh",
    "Govind",
    "Ravan",
    "Suresh",
    "Kumar"
];

var students=[
    "Raju",
    "Mohan",
    "Sohan",
    "Murari",
    "Hari",
    "Lal"
];

var subjects=[
    "Maths",
    "Science",
    "SST",
    "GK",
    "Social Scinece",
    "OOPS"
];
console.log(teachers,students,subjects);
console.log(teachers[3]);
*/

//==========Objects===================

/*var obj={
    Name:"Santosh",
    Age:26,
    Roll_Number:12345,
    BTech:"IT"
}
console.log(obj);
*/

//=====================

/*var mobile={
    name:"Apple Iphone15promax",
    price:60000,
    rom:"128GB" ,
    display:"15.4cm",
    primaryCamera:"12MP",
    secondaryCamera:"12MP",
    processor:"A15",
    warranty:"1 year Waranty" ,
    image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/4/r/-original-imagtc4g22rcatjg.jpeg?q=70&crop=false"   ,
    discount:15
}

console.log(mobile);
var amount=(mobile.price*15)/100;
var priceAfteAmount=mobile.price.amount;
console.log(priceAfteAmount);

*/
//=======================================================

/*function signUp(event) {
    event.preventDefault();
    console.log(event.target[0]);
    console.log(event.target[1]);
    console.log(event.target[2]);
    console.log(event.target[3]);
}
*/
//==========================================================
function signUp(event){
    event.preventDefault();
    var user={
        firstName:event.target[0].value,
        lastName:event.target[1].value,
        password:event.target[2].value,
        email:event.target[3].value

    }
    console.log(user);

}
