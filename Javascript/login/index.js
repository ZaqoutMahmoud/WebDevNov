// Variable to count number of attempts.

var attempt = 3; 

// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "mahmoud" && password == "mahmoud2021"){
window.location = "admin.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert(" The User Name or Password you entered is incorrect. please try again! You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}