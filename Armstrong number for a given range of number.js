for(var num = 1; num<=1000; num++) { 
   var num = parseInt(prompt("enter the number"))
   var arm = num
   var sum = 0
  
   while ( arm>0)
 {
     var digit = arm%10
    
     sum += digit**3
    
     arm = parseInt(arm/10)

 }
 if (sum === num)
 {
     console.log( num, " is armstrong number")
 }
 else
 {
    console.log( num, " is not armstrong number")
 }

}