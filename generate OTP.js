
function Generateotp(){
    
    var digit = 01234567
    var OTP = 0
    var digitlength = 10
    for( var i=0 ; i<=6 ; i++)
    {
         OTP += digit[Math.floor(Math.random()*10)]
    }
    return(OTP)

}

console.log(Generateotp())