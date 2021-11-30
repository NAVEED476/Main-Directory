// function chanege (input){
//     var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     var lower="abcdefghijklmnopqrstuvwxyz"
//     store=""
//     for(var i=0;i<input.length;i++){
        
//         for(var j=0;j<upper.length;j++){
//             if(input[i]==upper[j]){
//                 store=store+upper[j]
//                 var k=store.toLowerCase()
//                 //console.log(k)
//             }
            
//         }
//     }    
//     console.log(k)

// }

// var i="NAVEED"
// chanege(i)


// var num="12345"
// var store=0
// for(var i=0;i<num.length;i++){
//     store=store+Number(num[i])
// }console.log(store)


// var digits="12"
// var count=0
// for(var i=0;i<digits.length;i++){
//     count+=Number(digits[i]**digits[i])
// }
// console.log(count)



// var number="1234444444222322"
// console.log(number.length)



function upper(input){
    var store=""
    var w=""
    var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lower="abcdefghijklmnopqrstuvwxyz"
    
    
    for(var i=0;i<input.length;i++){
        
        
        for(var j=0;j<upper.length;j++){
            
            
            for(var k=0;k<lower.length;k++){
                
                
                if(input[i]==upper[j]){
                    w= upper[j].toLowerCase()
                    store+=w
                                  
                 }
                 else if(input[i]==lower[k]){
                     w=lower[k].toUpperCase()
                     store+=w
                 }
                 
            }
        }
    }
    //console.log(store)

}

var n="NaVeEd"
upper(n)



