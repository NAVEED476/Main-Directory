var arr=[1,1,1,1,1,1,1,1]

var n=arr.length

var n=arr.length
function unique(n,arr){
    var mat=[]
   
    for(var i=0;i<n;i++){
        var count=0
        for(var j=0;j<mat.length;j++){
            if(arr[i]==mat[j]){
                count++
            }
        }
        if(count==0){
            mat.push(arr[i])
        }
    
        
    }
    return mat
   
}

unique(n,arr)