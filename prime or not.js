var num = parseInt(prompt("enter the number"))
isprime()
function isprime()
{
        for(var i=2 ; i<num ; i++)
        { 
            if(num%i === 0)
            {
                console.log(num, " is not prime number")
            }
    
        }
        console.log(num, " is prime number")
        
}

   
    
