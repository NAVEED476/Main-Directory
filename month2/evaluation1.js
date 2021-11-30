function sumWithoutBorders(N, M, matrix){
    //write code here
    var sum=0
    for(var i=0;i<N-1;i++){
        
        for(var j=0;j<M-1;j++){
            sum+=matrix[i][j]
        }
    }console.log(sum)
  
}
// var arr=[[1, 2, 3, 4],
//         [5, 6, 7, 8], 
//         [9, 10, 11, 12]
//         [13, 14, 15, 16]]
//         var n=arr.length
//         var m=arr[0].length
       // sumWithoutBorders(n,m,arr)



var arr=[1,1,1,2,2,2]
//console.log(arr.sort())
var n=arr.length
//console.log(n)
// var mat=[]
// for(var i=0;i<n/2 && n!=0;i++){
//     mat.push(arr[i])
// }for(var j=n-1;j>=n/2;j--){
//     mat.push(arr[j])
// }
// console.log(mat)
// var count=0
// for(var i=0;i<mat.length/2;i++){
//     if(mat[i]!=mat[mat.length-i-1]){
//         count++
//     }
// } if(count==0){
//     console.log("palindrome")
// }else{
//     console.log("no")
// }
var count=0
for(var i=0;i<n;i++){
    if(arr[i]!=arr[n-i-1]){
        count++
    }
}if(count==0){
    console.log("yes")
}else{
    console.log("no")
}