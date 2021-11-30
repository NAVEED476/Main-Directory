
function cirTraversal(matrix,N) {
    var mat=[]
    //write code here
    for(var i=0;i<=0;i++){
        for(var j=N-1;j>=0;j--){
            mat.push(matrix[j][i])
        }
    }

    for(var i=1;i<N;i++){
        for(var j=0;j<=0;j++){
            mat.push(matrix[j][i])
        }
    }

    for(var i=N-1;i<N;i++){
        for(var j=1;j<N-1;j++){
            mat.push(matrix[j][i])
        }
    }

    for(var i=N-1;i<N;i++){
        for(var j=N-1;j>0;j--){
            mat.push(matrix[i][j])
        }
    }


    console.log(mat.join(" "))


    
    
    
    
    
}
var arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
var len=arr[0].length

cirTraversal(arr,len)