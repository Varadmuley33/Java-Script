function CheckPerfect(No)
{
    let iSum = 0;
    let iCnt = 0;

    for(iCnt = 1 ; iCnt <= No/2 ; iCnt++)
    {
        if((No % iCnt) == 0)
        {
            iSum = iSum + iCnt;
        }
    }

    if(iSum == No)
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
    let iValue = 28;
    let bRet = false;


    bRet = CheckPerfect(iValue);

    if(bRet == true)
    {
        console.log(`${iValue} is a perfect number `);

    }
    else
    {
        console.log(`${iValue} is not perfect number `);
  
    }
}

main();


