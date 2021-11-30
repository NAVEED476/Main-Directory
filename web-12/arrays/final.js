
function findPairs(N,M,arr){
    var count=0
    for(var i=0;i<N-1;i++){
        var sum=arr[i]*arr[i+1]
        if(sum==M){
            count++
        }
        
    }console.log(count)
}




var array=[3,2,2,1,5,6,2,2]
var n=array.length
var m= 2
// 5 4
// 3 2 2 1 5
findPairs(n,m,array)

//9 15



// function binaryString3(N,str){
//     //write code here
//     var mat=[]
//     for(var i=0;i<=N;i++){
//         for(var j=i+1;j<=N;j++){
//             var substr=""
//             for(var k=i;k<j;k++){
//                 substr+=str[k]
                
//             }mat.push(substr)
//         }
//     }console.log(mat)
// }

// var string="1001"
// var n=string.length
// binaryString3(n,string)



// function sumOfOddNosII(N,arr){
//     //write code here
//     var count=0
//     for(var i=0;i<N;i++){
//         if(arr[i]%2!=0){
//             count++
//         }
//     }if(count%2==0){
//         console.log("It is Even")
//     }else{
//         console.log("It is Odd")
//     }
// }


// var a=[2 ,2 ,2 ,2 ,1]
// var b=a.length
// sumOfOddNosII(b,a)

// // 5
// // 2 2 2 2 1


//prime(10)


// function matrixPrimeCheck(N, M, arr) {
//     //write code here
//     function prime(n){
//         var count=0
//         for(var i=0;i<=n;i++){
//             if(n%i==0){
//                 count++
//             }
//         }if(count==2){
//             return true
//         }else{
//             return false
//         }
//     }
//     var count1=0
//     for(var i=0;i<N;i++){
//         for(var j=0;j<M;j++){
//             if(prime(arr[i][j])){
//                 count1++
//             }
//         }
//     }console.log(count1)
    
//   }

//   var a=[[1, 2, 3], 
//         [4, 5, 6],
//         [7, 8, 9]]

//         var r=a.length
//         var l=a[0].length
//         matrixPrimeCheck(r,l,a)


var a=[2]
//console.log(multi(a))


// function evenProductInColumns(N,M,arr){
//     //write code here
//     function multi(input){
//         var m=1
//         if(input.length==1){
//             return m*input
//         }else{
//             for(var i=0;i<input.length;i++){
//                 m*=input[i]
//             }
//         }return m
//     }
    
   
//     for(var i=0;i<M;i++){
//         var mat=[]
//         for(var j=0;j<N;j++){
//             if(arr[j][i]%2==0){
//                mat.push(arr[j][i])
//             }
//         }console.log(multi(mat))
//     }
  
// }
// var array=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// var r=array.length
// var c=array[0].length
// evenProductInColumns(r,c,array)