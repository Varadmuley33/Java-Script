
class Arithmatic
{
    constructor(A,B)   
    {
        this.No1 = A;
        this.No2 = B;
    }

    Addition()
    {
       return this.No1 + this.No2 ;
    }

    Substracion()
    {
       return this.No1 - this.No2 ;
    }
    
}

function main()
{
    let obj = new Arithmatic(11,10);
    
    let iRet = 0;

    iRet = obj.Addition(10 , 11);
    console.log("Addittion is : ",iRet);

    iRet = obj.Substracion(10 , 11);
    console.log("Substracion is : ",iRet);
    
}

main();
