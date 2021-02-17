
var startNumber = 1 
var endNumber = 50


for(var num = 0; num<=50; num++){   
    var sum = 0
    
    for(j = 1; j <= num / 2; j++)
    {
      if(num%j == 0)
      {
          sum += j
      }
    } 
    if ( sum === num)
    {
        console.log(num, "perfect number")
    }
   
}


