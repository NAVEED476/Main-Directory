
function spiralTraversalV(N, matrix){
    //write code here


    var left=0;
    var right=N-1
    var top=0;
    var bottom=N-1
    var count=0
    var mat=[]
    while(count<(N*N)){
        for(var i=top;i<=bottom;i++){
            mat.push(matrix[i][right])
            count++
        }
        right--

        for(var j=right;j>=left;j--){
            mat.push(matrix[bottom][j])
            count++
        }
        bottom--

        for(var k=bottom;k>=top;k--){
            mat.push(matrix[k][left])
            count++
        }

        left++


        for(i=left;i<=right;i++){
            mat.push(matrix[top][i])
            count++
        }
        top++
      
    }console.log(mat.join(" "))
    
}
