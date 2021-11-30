// function sumOfIndexes(N,M,arr){
//     //write code here
    
//     for(var i=0;i<N;i++){
        
//         var sum=[]
//         for(var j=0;j<M;j++){
//             var count=0;
//             count+=(i+j)
//             sum.push(count)
            
            
//         }

//         console.log(sum.join(" "))
            
//     }
// }

//===================================================

// function array2D(N,M,arr){
//     //write code here
  
    
//     for(var i=0;i<N;i++){
//         var store=[]
//         for(var j=0;j<M;j++){
//             var count=0
//            count+= (arr[i][j])
//            store.push(count)
//         }console.log(store.join(" "))
//     }
// }
// var n=3 
// var m=2
// var a=[[1 ,2],
//         [3, 4],
//         [5, 6]
// ]

// array2D(n,m,a)


// //0 1
// //1 2
// //2 3
//============================================





// function evenSumRows(N,M,arr){
//     //write code here
    
            
    
//     for(var i=0;i<N;i++){
        
//         var store=[]
//         var count=0
//         for(var j=0;j<M;j++){
            
//             if(arr[i][j]%2==0){
                
//                 count+=arr[i][j]
//                 //store.push(count)
//             }
            
//         }console.log(count)
//     }
// }

///////////////////////////////////////////////////////////
// 2
// 10
// 8
// function oddSumRows(N,M,arr){
//     //write code here
//     for(var i=0;i<N;i++){
//         var count=0
//         for(var j=0;j<M;j++){
//             if(arr[i][j]%2!==0){
//                 count+=arr[i][j]
//             }
//         }console.log(count)
//     }
// }

// var n=3
// var m=3
// var a =[
//     [1 ,2 ,3],
//     [4 ,5 ,6],
//     [7 ,8 ,9]
        
// ]


// oddSumRows(n,m,a)
//=============================================
// function vowelsInRows(N,M,arr){
//     //write code here
//     for(var i=0;i<N;i++){
//         var count=0
//         for(var j=0;j<M;j++){
//             if(arr[i][j]=="a" ||arr[i][j]=="e" ||arr[i][j]=="i" ||arr[i][j]=="o" ||arr[i][j]=="u"){
//                 count++
//             }
//         }if(count>0){
//             console.log("Yes")
//         }else{
//             console.log("No")
//         }
//     }
// }
// var n=3
// var m=3
// var aa=[["a" ,"b", "a"],
//         ["c" ,"d","i"],
//         ["e" ,"f","u"]
// ]
// vowelsInRows(n,m,aa)
//==================================================================



// function evenSumColumns(N,M,arr){
//     //write code here
//     for(var i=0;i<M;i++){
//         var count=0
//         for(var j=0;j<N;j++){
//             if(arr[j][i]%2==0){
//                 count+=arr[j][i]
//             }
//         }console.log(count)
//     }
// }

//===================================================================
function oddSumColumns(N,M,arr){
    //write code here
    for(var i=0;i<M;i++){
        var count=0
        for(var j=0;j<N;j++){
            if(arr[j][i]%2!=0){
                count+=arr[j][i]
            }
        }console.log(count)
    }
}




var n=3
var m=3
var a=[[1 ,2 ,3],
        [4, 5, 6],
        [7 ,8 ,9]
]
oddSumColumns(n,m,a)


// 4
// 10
// 6