var sum = 0
var average = 0

var num =  parseInt(prompt("enter the number"))
 for(i=1 ; i<=num ; i++)
 {
     console.log(i)
     sum += i
     average = sum/10
 }
 console.log("sum" +sum)
 console.log("Average" +average)