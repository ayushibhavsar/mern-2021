var basicSalary = 15000
var HRA = 0
var DA = 0

if (basicSalary <= 10000)
{ 
    HRA = (basicSalary*20)/100
    DA= (basicSalary*80)/100
}
else if (basicSalary <= 20000)
{ 
    HRA = (basicSalary*25)/100
    DA= (basicSalary*90)/100
    
}
else (basicSalary > 20000)
{ 
    HRA = (basicSalary*30)/100
    DA= (basicSalary*95)/100
}

var grossSalary = basicSalary + HRA + DA
 console.log(grossSalary)