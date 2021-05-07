function clearErrors() {
    error = document.getElementsByClassName("form-error");
    for (let items of error) {
        items.innerHTML = "";
    }
}
function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName("form-error")[0].innerHTML = error;
    
}

function validateform (e) {
    var returnval = true;
    clearErrors();
    var name = document.forms["myForm"]["fname"].value;
    if (name.length < 3 || name.length > 35) {
        seterror("name", "Please enter appropriate name");
        returnval = false;
    }
  var phone = document.forms["myForm"]["fphone"].value;        
    if (phone.length < 10) {
        seterror("phone", "Please enter 10 digits contact number")
        returnval = false;
    }
    // var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    // if (password.match(!passw)){
        //     console.log("password is too short");
        //     seterror("password", "Password is too short");
        //     returnval = false;
        // }
    var password = document.forms["myForm"]["fpassword"].value;
    var cpassword = document.forms["myForm"]["fcpassword"].value;
    if (cpassword != password) {
        seterror("cpassword", "Password is not matching");
        returnval = false;
    }

    return returnval;
    e.preventDefault();
}
function passCheck(data) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$/;
    if (data.match(passw)) {
        returnval = true;
    }
    else {
        seterror("password", " Your password must have minimum 8 characters (least one lowercase, one uppercase letter, one numeric digit and one special character)");
        returnval= false;
    }
}