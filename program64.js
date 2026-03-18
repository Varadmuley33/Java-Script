function SumDigits(num)
{
    let sum = 0;

    while(num > 0)
    {
        sum = sum + (num % 10);
        num = Math.floor(num / 10);
    }

    return sum;
}

function main()
{
    let num = 1234;

    let result = SumDigits(num);
    console.log("Sum of digits:", result);
}

main();
