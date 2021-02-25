function Generatevarcharotp(length){
    
    var strings = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var OTP = ''
    var stringslength = strings.length
    for( var i=0 ; i<=6 ; i++)
    {
         OTP += strings[Math.floor(Math.random()*stringslength)]
    }
    return (OTP)

}

console.log(Generatevarcharotp())