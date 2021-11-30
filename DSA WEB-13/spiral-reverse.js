function spiralTraversalV(N, matrix){
    //write code here
  var top=0;
  var bottom=N-1;
  var left=0;
  var right=N-1;
  var count=0;
  var mat=[]
  while(count<(N*N)){
  	for(var i=top;i<=bottom;i++){
    	mat.push(matrix[i][left])
          count++
    }left++;
      for(var i=left;i<=right;i++){
      	mat.push(matrix[bottom][i])
          count++
      }bottom--;
       for(var i=bottom;i>=top;i--){
       		mat.push(matrix[i][right])
              count++
       }right--;
    for(var i=right;i>=left;i--){
    	mat.push(matrix[top][i])
          count++
    }top++;
  }
	console.log(mat.join(" "))
  
}

var arr=[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

spiralTraversalV(3,arr)