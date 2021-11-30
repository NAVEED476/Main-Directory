// var n="nAvED"
// var lower="abcdefghijklmnopqrstuvwxyz"
// var str=""
// for(var i=0;i<n.length;i++){
//     for(var j=0;j<lower.length;j++){
//         if(n[i]==lower[j]){
//             str=str+lower[j]

//         }
        
//     }
// }console.log(str)



function removeupper(N,str){
    var string=""
    var lower="abcdefghijklmnopqrstuvwxyz"
    
    for(var i=0;i<N;i++){
        for(var j=0;j<lower.length;j++){
            if(str[i]==lower[j]){
                string=string+str[i]
            }
        }
    }console.log(string)
}
var na="nAvEED"
removeupper(5,na)


// var sting="naveed"
// var count=0
// for(var i=0;i<sting.length;i++){
//     if(sting[i]=="@" || sting[i]=="$" || sting[i]=="#" || sting[i]=="*"){
//         count++
//     }
    
// }if(count==1){
//     console.log("yes")
// }else{
//     console.log("no")
// }

var array=["n@veed","nr@pal","n*#$"]

for(var i=0;i<array.length;i++){
    var count=0
    var sting=array[i]
   
    for(var j=0;j<sting.length;j++){
        if(sting[j]=="@" || sting[j]=="$" || sting[j]=="#" || sting[j]=="*"){
            count++
        }
    }
}if(count>0){
    console.log("yes")
}else{
    console.log("no")
}

var arr1 = [100,20,40];
var arr2 = [2,1,2];


var result = 0;
for (var i=0; i < arr1.length; i++) {
  result += (arr1[i] * arr2[i]);
}

console.log(result);





function runProgram(N,arr) {
    var str2 = ""
    for(var i = 0; i < arr.length; i++) {
    var str = arr[i];
    var count = 0;
    var flag = "Week";
    for(var j = 0; j < str.length; j++)
    {
    if(str[j] === "@" || str[j] === "*" || str[j] === "$" || str[j] === '#')
    {
    count++;
    }
    if(count > 0)
    {
    flag = "Strong";
    }
    }
    str2 += flag + " ";
}
console.log(str2);
}
var n=["m#","ce@","hshsm"]

runProgram(3,n)

function evenodd(N,arr){
    var str=""
    for(var i=0;i<N;i++){
        if(i%2==0){
            str=str+arr[i+1]+" "
        }else{
            str=str+arr[i-1]+" "
        }
    }console.log(str)
}
  var list=["a","b","c","d"]
  var n=4
  evenodd(n,list)