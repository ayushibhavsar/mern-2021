var num = 7
var sum = 0
for(i = 1; i <= num / 2; i++)
    {
        if(num%i == 0)
        {
            sum += i
        }
    }
if ( sum === num)
{
    console.log("perfect number")
}
else{
    console.log(" not perfect number")
}