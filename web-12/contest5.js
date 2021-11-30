
// var number=121
// num=number.split('').reverse().join('')
// //console.log(num)

// if(number==num){
//     console.log("yes")
// }else{
//     console.log("no")
// }




function getSubstrings(s){

    let substrings = [];

    for(let length = 1 ; length <= s.length; length++){
        for(let  i = 0 ; i<= s.length ; i++){
            substrings.push(s.substr(i, length));
        }
    }

    return substrings;
}
//console.log(getSubstrings("naveed"))


var string="masai"
var s=string.length

for(var i=0;i<s;i++){
    for(var j=i+1;j<=s;j++){
        var store=""
        for(var k=i;k<j;k++){
            store+=string[k]
        }console.log(store)
    }
    
}
