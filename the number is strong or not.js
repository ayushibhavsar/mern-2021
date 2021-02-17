var n = 145, reminder, sum = 0;
  
var tmp = n;
  
while (n != 0)
{
    reminder = n % 10;
    sum = sum + factorial(reminder);
    console.log(sum)
    n = Math.floor(n / 10);
}
if (sum == tmp)
    console.log(tmp + " is a strong number");
else
    console.log(tmp + " is not a strong number");
     
                 
function factorial(n)
{
    var fact = 1;
  
    for (var i = 2; i <= n; i++)
        fact = fact * i;
  
    return fact;
}