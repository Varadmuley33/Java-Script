function CountWords(str)
{
    let words = str.split(" ");
    return words.length;
}

function main()
{
    let str = "Hello this is JavaScript";

    let result = CountWords(str);
    console.log("Word count:", result);
}

main();
