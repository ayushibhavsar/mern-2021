
function fact(n){
   
    if(n==0){
        return 1
    }

    var f = 1;
    for(var i=1; i<=n; i++){
        f *= i
    }
    return f
}
function pow(a, b){
    var p = 1
    for(var i=1; i<=b; i++){
        p *= a
    }
    return p
}

var numOfTerms = 5
var x = 2

var count = 1
var i = 0
var res = 0
while(count<=numOfTerms){
    if(i%3 != 0){
        var calc = pow(x, i)/fact(i)
        if(count%2==0){
            res -= calc
        }else{
            res += calc
        }
        count ++
        console.log(i)
    }
    i++
}

console.log(res)