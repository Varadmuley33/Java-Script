function CountChar(str, ch)
{
    let i = 0;
    let count = 0;

    for(i = 0; i < str.length; i++)
    {
        if(str.charAt(i) == ch)
        {
            count++;
        }
    }

    return count;
}

function main()
{
    let str = "Hello World";
    let ch = 'l';

    let result = CountChar(str, ch);
    console.log("Count is:", result);
}

main();
