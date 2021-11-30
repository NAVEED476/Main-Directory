function small(n,arr){
    var sum=arr[0]
    for(var i=0;i<n;i++){
        if(sum>arr[i]){
            sum=arr[i]
        }
    }console.log(sum)
}

// var nn=[9,10,11,13,15]
// small(5,nn)




    // var smallest = arr[0];
    // var biggest = arr[0];

    // for(var i=1; i<arr.length; i++){
    //     if(arr[i] < smallest){
    //         smallest = arr[i];   
    //     }
       
        
    //     else if(arr[i]>biggest){
    //         biggest = arr[i]
    //     }
        
    // }
    // console.log(smallest);
    // console.log( biggest)
function smallandbig(n,arr){
    var small=arr[0]
    var big=arr[0]
    for(var i=0;i<n;i++){
        if(arr[i]<small){
            small=arr[i]
        }else if(arr[i]>big){
            big=arr[i]
        }
    }console.log(small)
    console.log(big)
}

var arr1=[1,2,3,4,5]
smallandbig(5,arr1)

