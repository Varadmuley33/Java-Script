function SmallestDigit(num)
{
    let min = 9;

    while(num > 0)
    {
        let digit = num % 10;

        if(digit < min)
        {
            min = digit;
        }

        num = Math.floor(num / 10);
    }

    return min;
}

function main()
{
    let num = 73921;

    let result = SmallestDigit(num);
    console.log("Smallest digit:", result);
}

main();
