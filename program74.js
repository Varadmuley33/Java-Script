function SumArray(arr)
{
    let sum = 0;
    let i = 0;

    for(i = 0; i < arr.length; i++)
    {
        sum = sum + arr[i];
    }

    return sum;
}

function main()
{
    let arr = [10, 20, 30, 40];

    let result = SumArray(arr);
    console.log("Sum:", result);
}

main();
