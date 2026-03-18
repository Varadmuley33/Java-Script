function SumEven(arr)
{
    let sum = 0;
    let i = 0;

    for(i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 == 0)
        {
            sum = sum + arr[i];
        }
    }

    return sum;
}

function main()
{
    let arr = [10, 15, 20, 25, 30];

    let result = SumEven(arr);
    console.log("Sum of even:", result);
}

main();
