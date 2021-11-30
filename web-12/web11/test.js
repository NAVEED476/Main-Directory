function decompress(string){
   var store=[]
   
   var items="abcdefghijklmnopqrstuvwxyz"
   for(var i=0;i<string.length;i++){
       for(var j=0;j<items.length;j++){
           if(string[i]==items[j]){
                store+=(string[i].repeat(string[i+1]))
                // var n=Number(string[i+1])
                // console.log(n)
                // console.log(store.repeat(n))
           }
       }
   }console.log(store)
}
var f="a3b2c3"
decompress(f)


function anagramDetector(s1,s2){
    //write code her"
    var k=s1.length
    var k2=s2.length
    var k3=""
    var k4=""
    for(var i=0;i<k;i++){
        if(s1[i]!==" "){
            k3+=s1[i]
            //console.log(k3)
        }
        
    }
    for(var j=0;j<k2;j++){
        if(s2[i]!=" "){
            k4+=s2[i]
            //console.log(k4)
        }
    }


    if(k4.length==k3.length){
        //console.log("True")
    }else{
       // console.log("False")
    }
  
}
var a="anagram"
var b="ram a nag"
anagramDetector(a,b)






var string="naaav"
var keep=""
for(var i=0;i<string.length;i++){
    if(string[i]!=" "){
        keep+=string[i]
    }
}
console.log(keep)





















// function countSuchPairs(N,K,A){
//     var array=[]
//     for(var i=0;i<N;i++){

//         for(var j=i+1;j<=N;j++){

//             var count=0
            
            
//             for(var k=i;k<j;k++){

//                 count=count+A[k]
//             }
//             array.push(count)
           
            
//         }
//     }

//     //console.log(array)
//     var found=0
//     for(var n=0;n<array.length;n++) {
//         if(array[n]==K){
//             found++
//         }        
//     }console.log(found)

// }
// var s=[2, 4, 1, 5, 6, 9, 4, 8]
// var s1=s.length
// var s2=11
// countSuchPairs(s1,s2,s)

