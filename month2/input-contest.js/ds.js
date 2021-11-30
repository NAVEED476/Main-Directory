function revise(N,arr){
    var left=0;
    var right=N-1;
    var top=0;
    var bottom=N-1;
    var count=0
    while(count<(N*N)){
        for(var i=top;i<=bottom;i++){
            console.log(arr[i][left])
        }count++
        left++;
        for(var i=left;i<right;i++){
            console.log(arr[bottom][i])
            count++;
        }left++;
        for(var i=bottom;i>=top;i--){
            console.log(arr[i][right])
            count++;
        }right--;
        for(var i=right;i>top;i--){
            console.log(arr[top][i])
            count++;
        }
    }
}


var matrix=[[1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]]
var n=matrix.length
revise(n,matrix)