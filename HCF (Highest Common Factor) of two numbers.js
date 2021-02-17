var a = 25
var b = 15
while(a%b !=0)
{
    var rem = a%b
    a=b
    b=rem
}
console.log(b)