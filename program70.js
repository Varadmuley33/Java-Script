function CountEven(arr)
{
    let count = 0;
    let i = 0;

    for(i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 == 0)
        {
            count++;
        }
    }

    return count;
}

function main()
{
    let arr = [10, 15, 20, 25, 30];

    let result = CountEven(arr);
    console.log("Even count:", result);
}

main();
