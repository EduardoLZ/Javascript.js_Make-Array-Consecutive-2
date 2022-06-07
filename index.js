function solution(statues) {
 var max;
 var min;
 
 max= Math.max.apply(null,statues);
 min= Math.min.apply(null,statues);
 
 
 var z;
 var z1;
 var z2=0;
 var r=0;

 for (z=min;z<=max;z++)
  {
   
   for(z1=0;z1<statues.length;z1++)
    {
      if(z==statues[z1])
       {
         z2++;
       }
    }
   if(z2==0)
    {
     r++;
    }
   z2=0;
  }
   
  
 return r;
}
