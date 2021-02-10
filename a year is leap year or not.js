var year = 2400

if(year % 4 == 0)
{
    console.log("this year is a leap year")
}
else if (year % 100 == 0)
{
    console.log("this year is a leap year because % 100")
}
else if (year % 400 == 0)
{
    console.log("this year is a leap year because % 400")
}
else

{
    console.log("this year is not a leap year")
}


