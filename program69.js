function Factorial(num)
{
    let fact = 1;
    let i = 0;

    for(i = 1; i <= num; i++)
    {
        fact = fact * i;
    }

    return fact;
}

function main()
{
    let num = 5;

    let result = Factorial(num);
    console.log("Factorial:", result);
}

main();
