// function vowelHalf(N, str) {
//     //write code here
//     var count=0
//     for(var i=0;i<N;i++){
//         if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" ||str[i]=="u"){
//             count++
//         }
//     }console.log(count)
//     if(count>(N/2)){
//         console.log("True")
//     }else{
//         console.log("False")
//     }
//   }

//   var s="naveed"
//   var n=s.length
//   vowelHalf(n,s)


// function twoStringsFromOne(N, str) {
//     //write code here
//     var vowel=""
//     var conso=""
//     for(var i=0;i<N;i++){
//         if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" ||str[i]=="u"){
//             vowel+=str[i]
//         }else{
//             conso+=str[i]
//         } 
//     }
//     console.log(vowel)
//     console.log(conso)
//   }
  

//   var s="nrupul"
//   var l=s.length
//   twoStringsFromOne(l,s)


// function compareVowelsConsonants(N, str) {
//     //write code here
//     var vowel=0
//     var conso=0
//     for(var i=0;i<N;i++){
//         if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" ||str[i]=="u"){
//             vowel++
//         }
//         else{
//             conso++
//         } 
//     }
//     if(vowel<conso){
//         console.log("Consonant")
//     }else if(vowel>conso){
//         console.log("Vowel")
//     }else{
//         console.log("Tie")
   
//     }
//   }
  
//   var s="nrupul"
//   var l=s.length
//   compareVowelsConsonants(l,s)



// function mapSymbolsSum(N, str) {
//     //write code here
//     for(var i=1;i<N-1;i++){
        
//     }
//   }
  

//   var str="!@#$%^&*"
//   console.log(str.length)


// function playOf4and6(N) {
//     // Write code here
//     if(N%4==0 && N%6==0){
//         console.log("Awesome!")
//     }else if(N%4==0){
//         console.log("Four!")
//     }else if(N%6==0){
//         console.log("Six!")
//     }else{
//         console.log("Dark!")
//     }
// }

// playOf4and6(18)

// function productOfRows(N,M,arr){
//     //write code here

// function multi(input){
//     var m=1
//     if(input.length==1){
//         return m*input
//     }else{
//         for(var i=0;i<input.length;i++){
//             m*=input[i]
//         }
//     }return m
// }
    
//     for(var i=0;i<N;i++){
//       var mat=[]
//         for(var j=0;j<M;j++){
//           mat.push(arr[i][j])
//         }console.log(multi(mat))
//     }
  
// }

// var array=[
//     [1,2],
//     [3,4],
//     [5,6]
// ]
// var row=array.length
// var col=array[0].length
// productOfRows(row,col,array)



// function productOfColumns(N,M,arr){
//     //write code here

// function multi(input){
//     var m=1
//     if(input.length==1){
//         return m*input
//     }else{
//         for(var i=0;i<input.length;i++){
//             m*=input[i]
//         }
//     }return m
// }
    
//     for(var i=0;i<M;i++){
//       var mat=[]
//         for(var j=0;j<N;j++){
//           mat.push(arr[j][i])
//         }console.log(multi(mat))
//     }
  
// }

// var array=[
//     [1,2],
//     [3,4],
//     [5,6]
// ]
// var row=array.length
// var col=array[0].length
// productOfColumns(row,col,array)


// function patternPrinting3(N){
//     //write code her*
    
//     for(var i=0;i<N;i++){
//         var out=""
//         for(var j=1;j<=N;j++){
//            //out+="*"
//            if(i==0 || i==N-1){
//                out+="*"
               
          
//            }
//            else{
//                if(j==N){
//                    out+="*"
//                }else{
//                    out+=" "
//                }
//            }
//         }console.log(out)
//     }
// }
// patternPrinting3(5)
  



var num=6
for(var i=0;i<num;i++){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    for(var j=0;j<num;j++){
        if(j==i){
            console.log(i ,j)
        }
    }
}