var str="abcad"

// function palin(str){
//     var left=0
//     var right=str.length-1

//     if(str.length<=1){
//         return "Yes"
//     }

//     while(left<right){
//         if(str[left]==str[right]){
//             left++;
//             right--;
//         }
//         else{
//             return "No"
//         }
//     }return "yes"
// }


// console.log(palin(str))

var validPalindrome = function(s) {

    let leftP = 0
    let rightP = s.length-1
    const isPalin = (str,left,right) =>{
        if(str.length<=1) return true
        
        while(left < right){
            if(str[left]==str[right]){
          left++
          right--
            } else{
                return false
            }
        }
        return true
      
    }
  
    while(leftP < rightP){
        if(s[leftP]!==s[rightP]){
            return isPalin(s,leftP+1,rightP) || isPalin(s, leftP, rightP-1) 
        }
        leftP++
        rightP--
    }
    return true
};
console.log(validPalindrome(str))