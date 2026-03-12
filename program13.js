// Write a function 

function Display(no)
{
    console.log("Jay ganesh..." + no);
    return ++no;
}

function main()
{
    let iRet = 0 ;

    iRet = Display(11);

    console.log("Return value is : "+iRet);
}

main();
