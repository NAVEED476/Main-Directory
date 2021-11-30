// var arr=["apple", "windows", "ubuntu"]
// function len(str){
//     return str.length

// }
// var result=arr.map(len)
// console.log(result)


// var arr=["apple", "windows", "ubuntu"]
// function first(str){
//     return str[0]
// }
// var result=arr.map(first)
// console.log(result)

// var arr=["apple", "windows", "ubuntu", "cola", "system"]
// function last(str){
//      if(str[0]=="a" || str[str.length-1]=="a"){
//         return str
//      }else{
//          return  
//      }
// }
// var result=arr.filter(last)
// console.log(result)

// var arr= ["A", "Good", "Problem"]
// // function oddlen(str){
// //     var sum=0
// //     if(str.length%2!=0){
        
// //         sum+=str.length
       
// //     }
// //    return sum
// // }
// // var result=arr.reduce(oddlen)
// // console.log(result)
// var sum=0
// for(var i=0;i<arr.length;i++){
//     if(arr[i].length%2!=0){
//         sum+=arr[i].length
//     }
// }console.log(sum)


var arr= [2, 4, 5, 3, 6, 8]
function even(n,index) {
    return index%2==0
}

var result=arr.filter(even)
console.log(result)

