var sum = 0
var firstnum = parseInt(prompt("enter the first number"))
var commonratio = parseInt(prompt("enter the commonratio"))
var items = parseInt(prompt("enter number of items for the G.P. series"))
var output = ''

for(var i=firstnum ; i<=(commonratio * items) ; i+=commonratio)
     
{
    
//     sum =(firstnum*(1-pow( commonratio,items+1)))/(1-r)
//    var tn = firstnum*(1-pow( commonratio,items-1))
   console.log(i)
    if(i == firstnum){
        output =  i
    }else{
        output = output + ' + ' + i
    }
}

output = output + ' = ' + sum
console.log(sum,output)
