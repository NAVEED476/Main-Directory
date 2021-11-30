// function verifyPal(N,str1,str2){
//     //write code here
//   var strinig=str1+str2
//   var l=strinig.length
//   var reversed=strinig.split("").reverse().join("")
//   //console.log(reversed)
//   if(strinig==reversed){
//       console.log("yes")
//   }else{
//       console.log("no")
//   }
// }
// var a="abc"
// var b="def"
// var n=a.length


// verifyPal(n,a,b)




// function oddSumSubArr(N,arr){
//     //write code here
//     var count=0
//     for(var i=0;i<N;i++){
//         for(var j=i+1;j<=N;j++){
//             var subarray=[]
//             var sum=0
            
//             for(var k=i;k<j;k++){
//                 subarray.push(arr[k])
//                 sum+=arr[k]
                
//             }//console.log(subarray)
//             //console.log(sum)
           
//             if(sum%2!=0){
//                 count++
//             }          
            
//         } 
            

        
//     }console.log(count)
    
// }

// var ar=[1,2,3]
// var l=ar.length
// oddSumSubArr(l,ar)

//=================================================


// function oddArrayTraversalModified(N,array){
//     //write code here
//     for(var i=0;i<N;i++){
//         if(array[i]%2!=0  && i%2!=0){
//             console.log(i+" "+array[i])
//         }
//     }

// }

// var arr=[2,1,4,3,5]
// var n=arr.length

// oddArrayTraversalModified(n,arr)



//============================================
function patternPrintingI(N) {
    // Write code here
    for(var i=1;i<=N;i++){
        var pat=""
        for(var j=1;j<=N;j++){
            if(i==1 || i==N){
                pat=pat+"*"+" "
            }else{
                if(j==1){
                    pat=pat+"*"+" "
                 }//else{
                //     pat=pat+"#"
                // }
            }
        }//console.log(pat.trim())
    }
}


 patternPrintingI(5)




//=====coding evaluation======


// function mapCharAndCompare(N, str, K) {
//     //write code here
//     var alpha="abcdefghijklmnopqrstuvwxyz"
//     var l=alpha.length
//     var sum=0
//     for(var i=0;i<N;i++){
       
//         for(var j=i+1;j<=l;j++){
//             if(str[i]==alpha[j]){
//                 sum+=j+1
//             }
//         }console.log(sum+"-"+str[i])
//     }
//     if(sum>=K){
//         console.log("True")
//     }else{
//         console.log("False")
//     }
      
//   }
 
//   var na="dpgasoev"
//   var n=na.length
//   var k=82
//   mapCharAndCompare(n,na,k)


// function sumOf2D(N,M,arr){
//     //write code here
//     var sum=0
//     for(var i=0;i<N;i++){
      
//         for(var j=0;j<M;j++){
//             sum=sum+arr[i][j]
//         }
  
//     }console.log(sum)
// }
// var n=3
// var m=2
// var a=[[1 ,2],
//         [3 ,4], 
//         [5 ,6]]
// sumOf2D(n,m,a)



// var obj={
//    data:[
//        {n:"Name1" ,g:"M"},
//         {n:"Name2" ,g:"F"},
//         {n:"Name3" ,g:"M"},
//         {n:"Name4" ,g:"M"},
//         {n:"Name5" ,g:"F"},
        
//    ],
//    finder:function(gender){
//        for(key in this.data){
//         for(var i=0;i<this.data[key].length;i++){
//             console.log(this.data[key][i])
//              if(this.data[key][i]==gender){
//                  console.log(key)
//              }
//        }
    
//    }
  
// }


// }


// var gen="M"
// obj.finder(gen)



// function substring(input1,input2){
//     for(var i=0;i<input1.length;i++){
//         for(var j=i+1;j<=input1.length;j++){
//             var substr=""
//             for(var k=i;k<j;k++){
//                 substr+=input1[k]
//             }//console.log(substr)
//             if(substr==input2){
//                 console.log(substr+'=='+input2)
//             }
            
//         }

//     }
// }

// // var inp="masai"
// // var inp2="ma"
// //substring(inp,inp2)
// function convert(str){
//     var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     var lower="abcdefghijklmnopqrstuvwxyz"
//     for(var i=0;i<str.length;i++){
//         var store1=""
//         for(var j=0;j<upper.length;j++){
//             if(str[i]==upper[j]){
                
//                 store1+=upper[j]
//             }
            
//         }console.log(store1)
//     }
// }

// var i="NAVEED"
// convert(i)


// var arr=[1,2,3,4,5]

// for(var i=0;i<arr.length;i++){
   
//     for(var j=i+1;j<=arr.length;j++){
//         var sub=""
//         for(var k=i;k<j;k++){
           
//             sub+=arr[k]
            
//         }
//     }console.log(sub)
// }



function pattern(input){
    for(var i=0;i<input;i++){
        var out=""
        for(var j=i;j<input;j++){
            out+=j
        }//console.log(out)
    }
}

pattern(10)


function firstpat(input){
    for(var i=1;i<=input;i++){
        var out=""
        for(var j=1;j<=i;j++){
            out+=j
        }//console.log(out)
    }
}
firstpat(10)

function values(input){
    var n=input*input
    for(var i=0;i<input;i++){
        var out=""
        for(var j=0;j<input;j++){
            out+=j
            
        }console.log(out)
    }
}

values(5)