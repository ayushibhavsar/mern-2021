var sum = 0
var firstnum = parseInt(prompt("enter the first number"))
var difference = parseInt(prompt("enter the difference"))
var items = parseInt(prompt("enter number of items for the A.P. series"))
var output = ''

for(var i=firstnum ; i<=(difference * items) ; i+=difference)
{
    
    sum+=i
    console.log(i)
    if(i == firstnum){
        output =  i
    }else{
        output = output + ' + ' + i
    }
    
}

output = output + ' = ' + sum
console.log(sum,output)
