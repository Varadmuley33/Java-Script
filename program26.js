function CountDigits(No)
{
    let iCount = 0;
    let iDigit = 0 ;

    while(No != 0)
    {
        iDigit = No % 10;
        iCount++;
        No = No/10;   // Issue

    }
    return iCount;
    
}

function main()
{
    let iValue = 721;
    let iRet = 0 ;

    iRet = CountDigits(iValue);

    console.log(`${iValue} contains ${iRet} digits`);
}

main();


