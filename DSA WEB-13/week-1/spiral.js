var mat=[
    [1,2,3,4],
    [5,6,7,8],
    [10,11,12,13]
]
var len=mat[0].length








function spiralTraversal(N, M, arr){
    //write code here 
    var left=0;
    var right=N;
    var top=0;
    var bottom=M;
    
    var count=0;
    while(count< N*N){
        
        for(var i=top;i<bottom;i++){
            console.log(arr[i][left])
            count++
        }
        left++;
        
        for(var i=left;i<right;i++){
            console.log(arr[bottom][i])
            count++
        }
        bottom--
        
        
        
        for(var i=bottom;i>top;i--){
            console.log(arr[right][i])
            count++;
        }
        right--
        
        
        
        
        for(var i=right;i>left;i--){
            console.log(arr[top][i])
            count++
        }
        top++
    }
    
    
    
    
  
}

spiralTraversal(3,3,mat)