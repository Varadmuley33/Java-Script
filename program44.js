
function Maximum(Brr)
{
   let iCnt = 0 ;
   let iMax = Brr[0]; 

   for(iCnt = 0 ; iCnt < Brr.length; iCnt ++)
   {
      if(Brr[iCnt] > iMax)
      {
         iMax = Brr[iCnt];
      }
   }
   return iMax;
}
function main()
{
   let ret = 0 ;

   const Arr = [10,20,30,40,50];
   ret = Maximum(Arr);
   console.log("Maximum is : ", ret)


}

main();
