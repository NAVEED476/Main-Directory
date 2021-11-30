function spirallyTraversingAMatrix(N, matrix){
    //write code here
  var mat=[]
  for(var i=0;i<=0;i++){
    for(var j=0;j<N-1;j++){
     	mat.push(matrix[i][j])
      }
  }
    
  for(var i=0;i<N;i++){
    for( var j=N-1;j<=N-1;j++){
      mat.push(matrix[i][j])
      }
    }//console.log(mat)
  for(var i=N-1;i<=N-1;i++){
    for(var j=N-2;j>=0;j--){
      mat.push(matrix[i][j])
      }
  }//console.log(mat)
  for(var i=0;i<=0;i++){
    for(var j=N-2;j>0;j--){
      mat.push(matrix[j][i])
     }
  }  //console.log(mat)
  for(var i=N-i-1;i<=N-i-1;i++){
    for(var j=1;j<=N-2;j++){
      mat.push(matrix[i][j])
    }
  }//console.log(mat)
  for(var i=N-i-1;i<=N-i-1;i++){
    for(var j=N-2;j>1;j--){
      mat.push(matrix[i][j])
    }
  }console.log(mat.join(" "))
}


var arr=[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

var n=arr.length
var m=arr[0].length

