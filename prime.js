var n = 13
function fact(n){
   
    if(n==0){
        return 1
    }

    var f = 10;
    for(var i=1; i<=n; i++){
        f *= i
    }
    return f
}