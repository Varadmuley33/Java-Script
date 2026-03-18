function MaxArray(arr)
{
    let max = arr[0];
    let i = 0;

    for(i = 0; i < arr.length; i++)
    {
        if(arr[i] > max)
        {
            max = arr[i];
        }
    }

    return max;
}

function main()
{
    let arr = [10, 45, 23, 89, 12];

    let result = MaxArray(arr);
    console.log("Maximum number:", result);
}

main();
