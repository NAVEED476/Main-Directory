// function twoArrayAndProduct(n, m, matrix, p){
//     var count=0
//     var mat=[]
//     var sum=0
//     for(var i=0;i<n;i++){
        
//         for(var j=0;j<m;j++){
//            if(j<m-2){
//                sum=matrix[i][j]*matrix[i][j+1]*matrix[i][j+2]
//            }
           
//         }
//     }console.log(sum)

 
    
// }


// var arr=[[3, 2, 1,1],
//         [2, 2, 2,2],
//         [1, 5, 1,0],
//         [1,2,3,1]]
//     N=arr.length
//     M= arr[0].length
//     P=6
//     twoArrayAndProduct(N,M,arr,P)



function Array3D(N,M,K,array) {
    //write code here
    
    for(var i=0;i<N;i++){
        for(var j=0;j<M;j++){
            var mat=[]
            for(var l=0;l<K;l++){
                mat.push(array[i][j][l])
            }console.log(mat.join(" "))
        }
    }
  }
//   var arr=[1,2,3,4,5,6,7,8]
//   var n=2
//   var m=2
//   var k=2
//  Array3D(n,m,k,arr)



// //   for(var i=0;i<N;i++){
//     for(var j=0;j<M;j++){
//       var arr = []
//       for(var l = 0;l<K;l++){
//            arr.push(array[i][j][l])
//         }
//   console.log(arr.join(" "))
//       }
//     }




// function finding(days,n){

// var obj={
//     0:"Monday",
//     1:"Tuesday",
//     2:"Wednesday", 
//     3:"Thursday", 
//     4:"Friday", 
//     5:"Saturday", 
//     6:"Sunday",
// }
// for(var key in obj){
//     for(var i=0;i<key.length;i++){
//         console.log(key[0])
//         n=n%7

//     }
// }
// }

//finding()


function traverse(arr,n){
    var left=0;
    var right=n-1;
    var top=0;
    var bottom=n-1;
    var count=0;
    var mul=n*n
    for(var i=0;i<=left;i++){
        for(var j=top;j<=bottom;j++){
            console.log(arr[i][j])
        }
    }
}


var matrix=[[1,2,3,4],
            [4,5,6,7],
            [8,9,10,11],
            [12,13,14,15]]
var l=matrix.length
traverse(matrix,l)