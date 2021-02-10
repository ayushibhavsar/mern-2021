var side1 = 60
var side2 = 60
var side3 = 180

if((side1 + side2 > side3)&&(side2 + side3 > side1)
            &&(side3 + side1 > side2))
{
    console.log("triangle is valid")
}
else{
    console.log("triangle is invalid")
}



