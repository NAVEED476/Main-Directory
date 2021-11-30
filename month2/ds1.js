// var arr=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [14,15,16,17]
// ]

// function nTraversal(matrix) {

//     var row=matrix.length
//     var col=matrix[0].length
//     var mat=[]


  
//     for(var i=0;i<=(col-col);i++){
//         for(var j=row-1;j>0;j--){
//             mat.push(matrix[j][i])
//         }
//     }//console.log(mat)

//     for(var i=0;i<row;i++){
//         for(var j=0;j<col;j++){
//             var sub=0
//             if(i-j==sub){
//                 mat.push(matrix[i][j])
//             }
//         }
//     }//console.log(mat)

//     for(var i=col-1;i<=col-1;i++){
//         for(var j=row-2;j>=0;j--){
//             mat.push(matrix[j][i])
//         }
//     }console.log(mat.join(" "))




// }

// nTraversal(arr)



function maximumOccuringElement(A,N){
    //write code here
    
    var prev=0
    var max=0
    var hash=[]
    for(var i=0;i<N;i++){
        var num=A[i]
        if(hash[num]==undefined)    {
            hash[num]=1
           
        }else{
            prev=hash[num]
            hash[num]=prev+1
        }
    }
    for (var key in hash ){
        if (max <hash[key]){
            max = hash[key]
            max = key
        }
    } console.log(max)
}


// var a=5
// var b=[0,2,1,6,9]

// maximumOccuringElement(b,a)

function dayOfTheWeek(day, N) {
    //write code here
    var mat=0
    var days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
      for(var i=0;i<days.length;i++){
        if(days[i]==day){
            mat+=i
        }
      }
      var k=mat+N
      
      var l=k%7
      console.log(days[l])
  }
  

  dayOfTheWeek("Wednesday",8)