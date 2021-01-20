//a function to display the error message
function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML=hintMsg;
}


//function to validate the form
function validateForm(){
//want to target all elements on form
var name = document.contactForm.name.value;

var email=document.contactForm.email.value;
var mobile=document.contactForm.mobile.value;
var country=document.contactForm.country.value;
var gender=document.contactForm.gender.value;
var hobbies=[];
var checkboxes=document.getElementsByTagName('hobbies[]');
//hobbies is different ecause it was checkboxes-not all would be chosen

//now we want to push up hobbies or the selected hobbies into an empty array
for (let i=0; i<checkboxes.length; i++){
    if(checkboxes[i].checked){//[i] because it is an array
        //.checked obviously means it was checked/selected
    hobbies.push(checkboxes[i].value);
    }
    }
}


//
var nameErr=emailErr=mobileErr=countryErr=genderErr=false;
if (name==" "){//if name is empty print error
    printError ("nameErr", "Please enter a valid name")
}else{
    var regex= /^[a-zA-Z\s]+$/;
    if(regex.test(name)=== false){
        //regrex is pattern attribute
        //if not matching pattern, print error
        printError("nameErr", "Please enter a valid Name");
    } else {
        printError("nameErr", "")
        nameErr = false;
    }
}


//validate email

if (email==" "){//if email is empty print error
    printError ("emailErr", "Please enter a valid email")
}else{
    var regex= /^\S+@S+\.\S+$/;
    if(regex.test(email)=== false){
        //regrex is pattern attribute
        //if not matching pattern, print error
        printError("emailErr", "Please enter a valid email");
    } else {
        printError("emailErr", "")
        emailErr = false;
    }
}


//validate mobile

//validate country

//validate gender

//validate hobbies

//most can be copied from earlier validations


//homework is make a form using html5
//info on page 970 chapter review on client side validation
//office hours are 12-1 and 7-8