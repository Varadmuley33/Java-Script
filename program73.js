function MinArray(arr)
{
    let min = arr[0];
    let i = 0;

    for(i = 0; i < arr.length; i++)
    {
        if(arr[i] < min)
        {
            min = arr[i];
        }
    }

    return min;
}

function main()
{
    let arr = [45, 12, 89, 3, 67];

    let result = MinArray(arr);
    console.log("Minimum number:", result);
}

main();
