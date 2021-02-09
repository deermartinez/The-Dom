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
//validate each one

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
        //if all criterias are not met to send an error, it allows it
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
if (mobile==" "){//if mobile is empty print error
    printError ("mobileErr", "Please enter a valid number")
}else{
    var regex= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regex.test(mobile)=== false){
        //regrex is pattern attribute
        //if not matching pattern, print error
        printError("mobileErr", "Please enter a valid 10 digit number");
    } else {
        printError("mobileErr", "")
        mobileErr = false;
    }
}

//validate country
if (country==="Select"){//if country is empty print error
    printError ("countryErr", "Please select your country")
} else {
printError("countryErr", "")
        countryErr = false;
    }


//most can be copied from earlier validations
//validate gender
if (gender==false|| " "){//if gender is unselected print error
    printError ("genderErr", "Please select your gender")
} else {
printError("genderErr", "")
        genderErr = false;
    }

//mkae sure the form cannot be submitted with errors

if ((nameErr|| emailErr||mobileErr||countryErr||genderErr)==true){
    return false;
}else{
    var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "Country:" + country + "\n" +
            "Gender: " + gender + "\n"
    if(hobbies.length){
        dataPreview += "Hobbies: " + hobbies.join(", ");

    }

    alert(dataPreview);
    
}




//homework is make a form using html5
//info on page 970 chapter review on client side validation
//office hours are 12-1 and 7-8


// function validate form


//Page 970

// document.forms[3]
// document.forms[1].element[2]
// document.getElementById(country).value = "Mexico";
// document.getElementById(country).focus//dont know how to do the focus on country within registration
// Selection.options[]
// var stateName = docment.getElementById("State").selected



// var my picture='gif link'



