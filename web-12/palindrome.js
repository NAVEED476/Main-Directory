// function pallindrome(N,str){
//     var store=""
//     for(var i=N-1;i>=0;i--){
//         store=store+str[i]
       
//     }//console.log(store)
//     if(store===str){
//         console.log("Yes")
//     }else{
//         console.log("No")
//     }
// }




// var string="rcixicr"
// pallindrome(7,string)



function checkPalindrome(N, str) {
    //write code here
  var store=[]
    for(var i=N-1;i>=0;i--){
      store+=str[i]
      
    }
    console.log(store)
    console.log(str)
    if(store==str){
      console.log("Yes")
      }else{
      console.log("No")
      }
 
  
}
var string=1221
checkPalindrome(6,string)


//oj scenario

function checkPalindrome(N, str) {
 	
    var store ="";
    //var str1=""
    for(var i=N-1;i>=0;i--){
      store=store+str[i]
       //store1.push(str[i])
    }
    //var str1 = str.join("");
    if(store==str1){
      console.log("Yes")
      }else{
      console.log("No")
      }

}


var num="1221"
var store=""
for(var i=num;i>=0;i++){
  store=store+num[i]
}
var n