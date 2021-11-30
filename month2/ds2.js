function zTraversal(N,matrix){
    //write code here
    var mat=[]
    for(var i=0;i<N-(N-1);i++){
        for(var j=0;j<N-1;j++){
            mat.push(matrix[i][j])
        }
    }
    for(var d=0;d<N;d++){
        for(var o=0;o<N;o++){
            var sum=N-1
            if(d+o==sum){
                mat.push(matrix[d][o])
            }
        }
    }
    for(var k=N-1;k<=N-1;k++){
        for(var l=1;l<N;l++){
            mat.push(matrix[k][l])
        }
    }
 console.log(mat.join(" "))
 
}






function rotateBy90(N, matrix){
    var row=matrix.length
    var col=matrix[0].length
   
    for(var i=0;i<N;i++){
        var mat=[]
        for(var j=N-1;j>=0;j--){
            mat.push(matrix[j][i])
            
        }console.log(mat.join(" "))
    }
    console.log('==================')
    for(var i=col-1;i>=0;i--){
        var mat=[]
        for(var j=0;j<row;j++){
            mat.push(matrix[j][i])
        }console.log(mat.join(" "))
    }
}

//rotateBy90(l,a)
//console.log("==============")
//zTraversal(l,a)

function rotateBy90(arr,n){
    for(var i=0;i<n;i++){
        for(var j=i;j<n-i-1;j++){
            var temp=arr[i][j]
            arr[i][j]=arr[j][n-i-1]
            arr[j][n-i-1]=arr[n-i-1][n-j-1]
            arr[n-i-1][n-j-1]=arr[n-j-1][i]
            arr[n-j-1][i]=temp
        }
        
    }
    for(var k=0;k<arr.length;k++){
        var mat=[]
        for(var col=0;col<arr.length;col++){
            mat.push(arr[k][col])
        }console.log(mat.join( " "))
    }
   
  
}
var a=[
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [1, 2, 3, 4],
    [5, 6, 7, 8]
   
]
var b=[[1,2,3],
        [4,5,6],
        [7,8,9]]

var l=a.length
var l1=b.length
rotateBy90(a,l)
rotateBy90(b,l1)