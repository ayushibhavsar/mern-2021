var side1 = 60
var side2 = 60
var side3 = 60

if((side1 == side2)&&(side2 == side3))
{
    console.log("triangle is equilateral triangle")// all sides are equal
}
else if(side1!=side2 && side2!=side3 && side3!=side1)
{
    console.log("triangle is scalene triangle")// all sides different
}
else
{
    console.log("triangle is isosceles triangle")// two sides equal
}
