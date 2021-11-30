// var items=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]
//  var row=items.length
//  var col=items[0].length



// function specificDiagonals(R, C, matrix, K){
//     //write code here
//     var d1=[]
//     var d2=[]
//     for(var i=0;i<R;i++){
//         d1.push(matrix[i][i])
//         d2.push(matrix[i][R-1-i])
//     }
//     console.log(d1.join(" "))
//     console.log(d2.join(" "))
  
// }
// specificDiagonals(row,col,items)



// //=============tic tac toe

// var arr=[
//     ["o","o","x"],
//     ["o","x","o"],
//     ["x","x","x"]
// ]
// var row=arr.length
// var col=arr[0].length
// for(var i=0;i<row-1;i++){
//     for(var j=0;j<col-1;j++){
//         if(arr[i][j]=="o"&&arr[i][j+1]=="o"&&arr[i][j+2]=="o"){
//             console.log("o")
//          }else if (arr[i][j]=="x" &&arr[i][j+1]=="x"&&arr[i][j+2]=="x"){
//              console.log("x") 
//          }
//          else if(arr[i][j]=="o" && arr[i+1][j]=="o" && arr[i+2][j]=="o"){
//             console.log("o")
//          }
//          else if(arr[i][j]=="x" && arr[j][i+1]=="x" && arr[j][i+2]=="x"){
//              console.log("x") 
//          }
//     }

    
// }

//========zigzag


// var items=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]

// var row=items.length
// var col=items[0].length
// var mat=[]
// for(var i=0;i<=row-1;i++){
//     if(i%2==0){
//         for(var j=0;j<=col-1;j++){
//             mat.push(items[i][j])
//         }
//     }else{
//         for(var j=col-1;j>=0;j--){
//             mat.push(items[i][j])
//         }
//     }
// }
// console.log(mat.join(" "))


function specificDiagonals(R, C, matrix, K){
    //write code here
    
    var mat=[]
    var mat1=[]
    var store=0
    var store1=0
    for(var i=0;i<=R-1;i++){
        for(var j=0;j<=C-1;j++){
            if(matrix[i][j]==K){
             store=i+j
             store1=j-i
            }
        }
    }//console.log(store1)
    
    
    // for diagonal one matrix


    for(var i=0;i<=R-1;i++){
        for(var j=0;j<=C-1;j++){
           if(j-i==store1){
               mat1.push(matrix[i][j])
           } 
        }
    }console.log(mat1.join(" "))



    
    for(var i=0;i<=R-1;i++){
        for(var j=0;j<=C-1;j++){
            if(i+j==store){
                mat.push(matrix[i][j])
            }
        }
    }console.log(mat.join(" "))


    //for diagonal two matrix

    
}
         

var items=[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

var a=items.length
var b=items[0].length
var c=5
//left(a,b,items,c)
specificDiagonals(a,b,items,c)