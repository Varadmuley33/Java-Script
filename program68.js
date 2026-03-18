function CountVowels(str)
{
    let count = 0;
    let i = 0;

    for(i = 0; i < str.length; i++)
    {
        let ch = str.charAt(i);

        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
           ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
        {
            count++;
        }
    }

    return count;
}

function main()
{
    let str = "Hello World";

    let result = CountVowels(str);
    console.log("Vowel count:", result);
}

main();
