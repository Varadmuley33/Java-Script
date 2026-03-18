function ReverseString(str)
{
    let rev = "";
    let i = 0;

    for(i = str.length - 1; i >= 0; i--)
    {
        rev = rev + str.charAt(i);
    }

    return rev;
}

function main()
{
    let str = "Hello";

    let result = ReverseString(str);
    console.log("Reversed string:", result);
}

main();
