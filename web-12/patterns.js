// for(var i=1;i<=5;i++){
//     var output=""
//     for(var j=1;j<=i;j++){
//         output=output+"*"
//     }console.log(output)
// }


// for(var i=1;i<=5;i++){
//     var out=""
//     for(var j=i;j<=5;j++){
//         out=out+"*"
//     }console.log(out)
// }



// for(var i=1;i<=5;i++){
//     var out=""
//     for(var j=5;j>0;j--){
//         out=out+j+" "
//     }console.log(out.trim())
// }



// for(var i=1;i<=6;i++){
//     var output=""
//     for(var j=1;j<=6;j++){
//         if(j%2==0){
//             output=output+"*"
//         }
//     }console.log(output)
// }

// var limit =13
// for(var num=1;num<=limit;num++){
//   var prime_count=0
//   for(var i=1;i<=num;i++){
//     if(num%i==0){
//       prime_count++
//     }
//   }
//   if(prime_count==2){
//     console.log(num)
//   }
// }


// function prime(limit){
//     for(var i=1;i<=limit;i++){
//         var count=0
//         for(var j=1;j<=i;j++){
//             if(i%j==0){
//                 count++
//             }
//         }
//         if(count==2){
//             console.log(i)
//         }
//     }
// }


// prime(13)


//=========pattern printing
var number=5
for(var i=0;i<number;i++){
    var pat=""
    for(var j=0;j<number;j++){
        if(i==j){
            pat+="#"
        }
    }console.log(pat)
}