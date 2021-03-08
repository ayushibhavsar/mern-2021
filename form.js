$(function(){
    $('body').on('click','#submit', function(e){
     e.preventDefault();
     
        Validate()
        passwordValid() 
    }) 
})
function Validate() {
    
    var mobile = $("#mobilenumber").val();
   
    var pattern = /^\d{10}$/;
    if (pattern.test(mobile)) {
        // alert("Your mobile number : " + mobile);
        return true;
    }
    alert("It is not valid mobile number.input 10 digits number!");
    return false;
}

function passwordValid() {
    var password = $("#password").val();
    var confirmPassword = $("#confirmpassword").val();
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}