// var arr=[1,-2,-3,01,2,-1]
// var count=0
// for(var i=0;i<arr.length;i++){
//     if(arr[i]<0){
//         count++
//     }
// }console.log(count)

// function sum(S){
//     var count=0;
//    var k=S.length
//    for(var i=0;i<S.length;i++){
        
//         var items="abcdefghijklmnopqrstuvwxyz"
//         for(var j=0;j<items.length;j++){
//             if(S[i]==items[j]){
//                 count=count+(j+1)
//             }
//         }
//     }console.log(count)
// }

// var n="abc"
// sum(n)


// function detector(s1,s2){
//     var k=s1.length
//     var k2=s2.length
//     var k3=""
//     var k4=""
//     for(var i=0;i<s2.length;i++){
//         if(s2[i]!=" " && s1[i]==" "){
//             k3+=s1[i]
//             k4+=s2[i]
//         }
//     }
//     if(k3.length==k4.length){
//         console.log("True")
//     }else{
//         console.log("False")
//     }
// }

// var a="sachin tendulkar is sachin tendulkar"

// var b="si sachin hsacin tendulkar tedulkad"
// detector(a,b)







function int(arr,target){
    //var count=0
    var array=[]
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<=arr.length;j++){
            var count=0
            var sum=0
            
            for(var k=i;k<j;k++){
                count=count+arr[k]
                
                
            }
            array.push(count)
           
            
        }
       
        
    }
    //console.log(array)
    var found=0
    for(var n=0;n<array.length;n++) {
        if(array[n]==target){
            found++
        }        
    }console.log(found)

}
var s=[3, 0, 6, 2, 7]
var s2=9
int(s,s2)










// var string="na a  a v"
// var keep=""
// for(var i=0;i<string.length;i++){
//     if(string[i]!=" "){
//         keep+=string[i]
//     }
// }
// console.log(keep)