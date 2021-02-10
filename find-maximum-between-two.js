var a = 100
var b = 20


//using conditional operator
var big = a>b ? a : b
console.log("maximum number is ", big)


//using control statements
var big
if(a > b){
    big = a
}else{
    big = b
}

console.log("maximum number is ", big)