


function prime(a,b){
    var count=0
   for(var i=1;i<=a;i++){
       
       if(a%i==0){
           count++
       }
   } var count1=0
   for(var j=1;j<=b;j++){
      
       if(b%j==0){
           count1++
       }
   }
   if(count==2 && count1==2){
       console.log("True")
   }else{
       console.log("False")
   }
    
}
prime(19,11)