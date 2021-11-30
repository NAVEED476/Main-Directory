// function vowelcheck(N,str){
//     var string="aeiou"
//     for(var i=0;i<N;i++){
    
//     for(var j=0;j<=string.length;j++){
//         if(str[i]==string[j]){
//             console.log("True")
//         }else{
//             console.log("False")
//         }
//     }
//     }
// }
// var name="navee"
// vowelcheck(5,name)


// var string="naveed"
// var reversed=string.split("").reverse().join("")
// console.log(reversed)
// if(string===reversed){
//     console.log("yes")
// }else{
//     console.log("no")
// }


// var str="abba"
// var count=""
// for(var i=str.length-1;i>=0;i--){
//     count=count+str[i]
// }console.log(count)
// if(str===count){
//     console.log("yes")
// }else{
//     console.log("no")
// }

// function vowel(n,str){
//     var count=0
//     for(var i=0;i<n;i++){
//         if(str[i]=="a" || str[i]=="e" || str[i]=="i" ||   str[i]=="o" || str[i]=="u"){
//             count++
//             console.log(count)
//         }
//     }if(count!=0){
//         console.log("vowel ")
//     }else{
//         console.log("conso")
//     }
    
// }
// var arr="navee"
// vowel(5,arr)

function vowelcount(n,str){
    var count=0
    var count1=0
    for(var i=0;i<n;i++){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" ||   str[i]=="o" || str[i]=="u"){
            count++   
        } 
        else{
            count1++
        }         
    }console.log(count, count1)
}
var sttr1="naveed"
vowelcount(6,sttr1)

