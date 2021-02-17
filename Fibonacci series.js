

    var fib1 = 0
    var fib2 = 1
    var fib3 = fib2

    for(i=1; i<100 ; i++)
    {
        fib3 = fib1 + fib2
        fib1=fib2
        fib2=fib3
        console.log(fib3)
    }

// console.log(fib)
