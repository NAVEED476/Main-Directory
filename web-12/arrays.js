// var names=["a","b","c","d","e"]
// var marks=[1,2,3,4,5]
// for(var i=0;i<names.length;i++){
//     console.log(names[i]+"-"+marks[i])
// }



// function secondmax(a,b,c){
//     var res=0
//     if(a>b && a>c){
//         res=res+a
//     }else if(b>a && b>c){
//         res=res+b
//     }else{
//         res=res+c
//     }

//     var max=[]
//     if(res>a && res>b){
//         max.push(a,b)
//     }else if(res>b && res>c){
//         max.push(b,c)
//     }else{
//         max.push(a,c)
//     }
//     if(max[0]>max[1]){
//         console.log(max[0])
//     }else{
//         console.log(max[1])
//     }

// }

// secondmax(27,4,1)


// var n = 10
// for(var i=0;i<=n;i++){
//     var string=""
//     for(var j=1;j<=n-i+1;j++){
//         string=string+" "
//     }
// }console.log(string)


// function reverseArray(arr) {
//     var newArray = [];
//     for (var i = arr.length - 1; i >= 0; i--) {
//       newArray.push(arr[i]);
//     }
//     return newArray;
//   }
//   var ar=[1,2,3,4,5]
//   console.log(reverseArray(ar))


//   var arr=[1,2,3,4,5]
//   for(var i=0;i<arr.length;i++){
//       if(arr[i]%2==0){
//           console.log(arr[i])
//       }
//   }



// function reverse(n,arr){
//     var rev=0
//     for(var i=n;i>0;i--){
//         console.log(arr)
//     }
// }



var a=[1,2,4,5,9]
var a1=a[0]
for(var i=0;i<a.length;i++){
    if(a1>a[i]){
        a1=a[i]
    }
}
console.log(a1)


var string="naveed"
console.log(string.toUpperCase())