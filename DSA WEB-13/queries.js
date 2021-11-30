function masaiTraversalAndQueries(N, M, q, arr){
    
    if(q==1){
        var mat=[]
    for(var i=0;i<N;i++){
        if(i%2==0){
            for(var j=0;j<m;j++){
                mat.push(arr[i][j])
            }
        }else{
            for(var k=M-1;k>=0;k--){
                mat.push(arr[i][k])
            }
        }
    }console.log(mat.join(" "))
    }
    
    if(q==2){
    
        var mat1=[]
    for(var i=0;i<N;i++){
        
        if(i%2==0){
            
            for(var j=M-1;j>=0;j--){
                mat1.push(arr[i][j])
            }
        }else{
            for(var j=0;j<N;j++){
                mat1.push(arr[i][j])
            }
        }
    }
    console.log(mat1.join(" "))
    }
    
      
    }
    
//     var arr=[
//         [1,2,3,4],
//         [4,5,6,7],
//         [7,8,9,8],
//         [10,11,12,13]
//     ]
    
//     var n=arr.length
//     var m=arr[0].length
//     masaiTraversalAndQueries(n,m,1,arr)
//     masaiTraversalAndQueries(n,m,2,arr)
    
    function runProgram(input) {
        // Write code here
        input=input.split("\n")
        var size=+input[0]
        var mat=[]
        for(var i=0;i<size;i++){
          mat.push(input[i+1].trim().split(" ").map(Number))
        }
        masaiTraversalAndQueries(n,m,mat)
       
      }
      if (process.env.USERNAME === "naveed") {
        runProgram(`4
        3 3 1
        1 2 3
        4 5 6
        7 8 9
        `);
      } else {
        process.stdin.resume();
        process.stdin.setEncoding("ascii");
        let read = "";
        process.stdin.on("data", function (input) {
          read += input;
        });
        process.stdin.on("end", function () {
          read = read.replace(/\n$/, "");
          read = read.replace(/\n$/, "");
          runProgram(read);
        });
        process.on("SIGINT", function () {
          read = read.replace(/\n$/, "");
          runProgram(read);
          process.exit(0) ;
        });
      }