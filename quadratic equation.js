var a = 1
var b = 4
var c = 4

var d = b*b-4*a*c
 
if(d>=0)
{
    var alpha = (-b - Math.sqrt(d))/2*a     //square root formula
    var beta = (-b + Math.sqrt(d))/2*a
    console.log(alpha , beta)
}
else 
{
    console.log("imaginary number")
}