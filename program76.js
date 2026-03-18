function CheckNumber(num)
{
    if(num > 0)
    {
        return "Positive";
    }
    else if(num < 0)
    {
        return "Negative";
    }
    else
    {
        return "Zero";
    }
}

function main()
{
    let num = -5;

    let result = CheckNumber(num);
    console.log(result);
}

main();
