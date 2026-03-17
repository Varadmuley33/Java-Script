
function Minimum(Brr)
{
   let iCnt = 0 ;
   let iMin = Brr[0]; 

   for(iCnt = 0 ; iCnt < Brr.length; iCnt ++)
   {
      if(Brr[iCnt] < iMin)
      {
         iMin = Brr[iCnt];
      }
   }
   return iMin;
}
function main()
{
   let ret = 0 ;

   const Arr = [10,20,30,40,50];
   ret = Minimum(Arr);
   console.log("Minimum is : ", ret)


}

main();
