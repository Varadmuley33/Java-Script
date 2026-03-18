function CheckPalindrome(str)
{
    let rev = "";
    let i = 0;

    for(i = str.length - 1; i >= 0; i--)
    {
        rev = rev + str.charAt(i);
    }

    if(str == rev)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function main()
{
    let str = "madam";

    let result = CheckPalindrome(str);

    if(result == true)
    {
        console.log("Palindrome");
    }
    else
    {
        console.log("Not Palindrome");
    }
}

main();
