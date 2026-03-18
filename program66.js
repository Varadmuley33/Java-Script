function CheckPrime(num)
{
    let i = 0;

    for(i = 2; i < num; i++)
    {
        if(num % i == 0)
        {
            return false;
        }
    }

    return true;
}

function main()
{
    let num = 7;

    let result = CheckPrime(num);

    if(result == true)
    {
        console.log("Prime Number");
    }
    else
    {
        console.log("Not Prime");
    }
}

main();
