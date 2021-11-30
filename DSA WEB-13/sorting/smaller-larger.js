

// function middle(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 1; j < arr.length; j++) {
//             if (arr[i] < arr[j] && arr[j] < arr[j + 1]) {
//                 return arr[j]
//             }
//         }
//     }
// }
// console.log(middle(arr))


// function middle(arr){
//     var left=-1;
//     var right=0
//     while(left<arr.length-1 && right<arr.length){
//         if(arr[left]<arr[right] && arr[right]<arr[right+1]){
//             if(arr[right]>arr[left] && arr[right]<arr[right+1]){
//                 return arr[right]
//             }



//         }
//         right++
//         left++

//     }return -1
// }


//console.log(arr.length)


//console.log(arr[len])




function mid(arr) {
    var left = 0
    var middle = Math.floor((arr.length) / 2)
    console.log(middle)
    var right = middle + 1
    var count = 0
    while (left < middle && right < arr.length) {
        //console.log("hello")
        // if(arr[left]>arr[middle] || arr[middle]>arr[right]){
        //     count++
        //     //console.log("j")


        // }
        console.log(left)
        left++
        right++



    }
    // console.log(count)
    // if(count==0){
    //     return arr[middle]
    // }
    // else{
    //     return -1
    // }


}
//console.log(mid(arr))

var arr = [5, 3, 6, 10, 9]
var len = Math.floor((arr.length) / 2)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

var count=0
for(var i=0;i<len;i++){
   // console.log(i)
   
    if(arr[i]>arr[len]){
        //console.log("hi")
        count++
    }
}
for(var j=len;j<arr.length;j++){
    //console.log(j)
    if(arr[j]>arr[len]){
        count++
    }
}

if(count==0){
    console.log(arr[len])
}
else{
    console.log(-1)
}