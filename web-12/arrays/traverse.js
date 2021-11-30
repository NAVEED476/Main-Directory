

// //my output=9 6 3 8 5 2 7 4 1
// function traverse2dArray(N, M, matrix){
//     var mat=[]
//     //write code here
//     for(var i=0;i<=M-1;i++){
//         for(var j=N-1;j>=0;j--){
//             mat.push(matrix[j][i])
//         }
//     }console.log(mat.join(" "))
  
// }

// traverse2dArray(3,3,arr)
// var arr=[
//     [4 ,7 ,1 ,1 ,7],
//     [8 ,9 ,9 ,6, 1],
//     [6 ,4 ,9 ,5 ,1],
//     [7, 7, 4, 7, 7],
//     [8, 6, 2, 5, 5]
// ]
// var a=arr.length
// var b=arr[0].length

// function traverse2dArray(N, M, matrix){
//     //write code here
//     var mat=[]
//     for(var i=M-1;i>=0;i--){
//         for(var j=0;j<=N-1;j++){
//             mat.push(matrix[j][i])
//         }
//     }console.log(mat.join(" "))
  
// }


// traverse2dArray(a,b,arr)


// //==========traverse in zigzag===


// var mat=[]
// var row=arr.length
// var col=arr[0].length
// for(var i=0;i<=row-1;i++){
//     if(i%2==0){
//         for(var j=0;j<=col-1;j++){
//             mat.push(arr[i][j])
//         }
        
//     }else{
//         for(var j=col-1;j>=0;j--){
//             mat.push(arr[i][j])
//         }
//     }
// }
// console.log(mat.join(" "))


// function goInZigZag(N, M, matrix){
//     //write code here
//     var mat=[]
//     for(var i=0;i<N-1;i++){
//         if(i%2==0){
//             for(var j=M-1;j>=0;j--){
//                 mat.push(matrix[i][j])
//             }

//         }else{
//             for(var j=0;j<M-1;j++){
//                 mat.push(matrix[i][j])
//             }
//         }

//     }console.log(mat.join(" "))
  
// }
// var items=[
//     [4 ,7 ,1 ,1 ,7],
//     [8 ,9 ,9 ,6, 1],
//     [6 ,4 ,9 ,5 ,1],
//     [7, 7, 4, 7, 7],
//     [8, 6, 2, 5, 5]
// ]
// var a=items.length
// var b=items[0].length
// goInZigZag(a,b,items)



// function twoArrayAndSum(n, m, matrix, s){
//     //write code here
//     var mat=[]
//     var count=0
//     for(var i=0;i<=n-1;i++){
//         var sum=0
    
//         for(var j=0;j<=m;j++){
//             sum=sum+matrix[i][j]
//             if(sum==s){
//                 mat.push(sum)
//                 console.log(sum)
//             }
           
//         }
//         //console.log(sum)
        
        
        
//     }


//     for(var h=0;h<m;h++){
//         var sum1=0
//         for(var l=0;l<n;l++){
//             sum1+=matrix[l][h]
//             if(sum1==s){
//                 mat.push(sum)
//             }
            
//         }//console.log(sum1)
//        // mat.push(sum1)

//     }//console.log(mat)

//     var sum3=0
//     for(var q=0;q<n;q++){
       
//         for(var p=0;p<m;p++){
           
//             if(q==p){
//                 sum3=sum3+matrix[p][q]
//                 if(sum3==s){
//                     mat.push(sum3)
//                 }
//             }
//         }
//     }//console.log(sum3)
//     //mat.push(sum3)
//     //console.log(mat)
    
//     var sum4=0
//     for(var r=0;r<n;r++){
        
//         for(var g=0;g<m;g++){
           
//             var store=r+g
//             if(store==n-1){
                
//                 sum4+=matrix[r][g]
//                 if(sum4==s){
//                     //count++
//                     mat.push(sum4)
//                 }
//             }
            
//         }
//     }//console.log(sum4)
//     //mat.push(sum4)

//     for(var k=0;k<mat.length;k++){
//         if(mat[k]==s){
//             count++
//         }
//     }//console.log(mat)
//     //console.log(count)

   

// }

// var arr=[
//     [1, 2, 1, 8],
//     [2, 2, 8, 6],
//     [8, 1, 2, 5],
//     [2, 5, 8, 6]]
//         var a=arr.length
//         var b=arr[0].length
//         var c=11
//         twoArrayAndSum(a,b,arr,c)

matrix=["safer",
"amjad",
"babol",
"aaron",
"songs"];
var m=5;
var n=5;

var str="";
var count=0;
//horizontal 
//============================================================================================================
for(var r=0;r<n;r++){
str="";
for(var c=0;c<m;c++)
{
str+=matrix[r][c];
}

 console.log(str);
if(str.includes("saba")){
count=count+strcount(str,"saba");    
}

}                                                                                                                                                                                                                                                                                                                                     