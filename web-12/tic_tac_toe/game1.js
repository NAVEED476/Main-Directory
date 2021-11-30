
// var arr=[
//     ["o" ,"x" ,'x'],
//     ['x' ,'o' ,'x'],
//     ['o' ,'o' ,'o']
// ]

// var r=arr.length
// var c=arr[0].length

// function ticTacToe(arr){
//     //write code heres
//     for(var i=0;i<=arr.length-1;i++){
//         for(var j=0;j<=arr[0].length-1;j++){
//             if(arr[i][j]=="o"  && arr[i][j+1]=="o" && arr[i][j+2]=="o"){
//                 return "o"
//             }
//             if(arr[i][j]=="x"  && arr[i][j+1]=="x" && arr[i][j+2]=="x"){
//                 return "x"
//             }
//             if(arr[i][j]=="x" && arr[i+1][j]=="x" && arr[i+2][j]=="x"){
//                 return "x"
//             }
//             if(arr[i][j]=="o" && arr[i+1][j]=="o" && arr[i+2][j]=="o"){
//                 return "o"
         
//             }//else{
//             //     return "tie"
//             //  }
//         }
//     }for(var i=0;i<arr.length;i++){
//         for(var j=0;j<arr.length;j++){
//             if(i==j){
//                 if(arr[i][j]="o" && ar[i+1][j+1]=="o" && arr[i+2][j+2]=="o"){
//                     return "o"
//                 }else if(arr[i][j]="x" && ar[i+1][j+1]=="x" && arr[i+2][j+2]=="x"){
//                     return "x"
//                } 
                 
//             }
//         }

        
//     }
  
// }


// console.log(ticTacToe(arr))






// function twoArrayAndSum(n, m, arr, s){
//     //write code here
//     var count=0
//     for(var i=0;i<n;i++){
//         for(var j=0;j<m;j++){
//             if(arr[i][j]+arr[i][j+1]+arr[i][j+2]==s){
//                 count++
//             }

//         }
//     }console.log(count)
//     for(var i=0;i<a;i++){
//         for(var j=0;j<b;j++){

//         }
//     }
  
// }
// var matrix=[
//     [3, 3, 6],
//     [3, 2, 1],
//     [2, 2, 2],
//     [1, 5, 1]
// ]
// var a=matrix.length;
// var b=matrix[0].length
// var r=6
// twoArrayAndSum(a,b,matrix,r)





function rotateBy90(R, matrix){
    //write code here
    for(var i=b-1;i>=0;i--){
        for(var j=0;j<=a-1;j++){
            console.log(matrix[j][i])

        }
    }
  
}


var arr=[
    [1,2,3,4],
    [4,5,6,7],
    [4,3,5,1]
]
var a=arr.length 
var b=arr[0].length
rotateBy90(arr)