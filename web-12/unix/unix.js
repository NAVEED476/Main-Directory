// function conversion(char){
//     var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     var lower="abcdefghijklmnopqrstuvwxyz"

//     for(var i=0;i<upper.length;i++){
//         if(upper[i]==char){
//             return lower[i]
        
//         }else if(lower[i]==char){
//             return upper[i]
//         }
//     }
// }





// function unix(input,char){
//     var str=""
//     for(var i=0;i<input.length;i++){
//         if(input[i]==" "){
//             str+=char
//         }else{               
//              str+=conversion(input[i])
            
            
//         }
        
//     }console.log(str)
    
  
// }
// var input="A transformation in Education"
// var character=""
// unix(input,character)

// const str1 = 'Saturday night plans';

// console.log(str1.startsWith('Sat'));
// // expected output: true

// console.log(str1.startsWith('ay', 7));
// // expected output: false


function replac(input,char){
    var str=""
    for(var i=0;i<input.length;i++){
        str+=char
    }console.log(str)
}

var nam="naveed"
var nam1="nvd"
replac(nam,nam1)