function footBallTournament(n, teamNamesArr) {
  //write code here
  var obj={}
  for(var i=0;i<n;i++){
    var temp=teamNamesArr[i]

    if(obj[temp]){
      obj[temp]++
    }
    else{
      obj[temp]=1
    }
  } 
  
  var max=0
  var team;
  for(key in obj){
    if(max<obj[key]){
      max=obj[key]
      team=key
    }
  }
  console.log(team)
}

  
  







function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var test=+input[0]
    var line=1
    var mat=[]
    for(var i=1;i<=test;i++){
      mat.push(input[i].trim())
    }
    footBallTournament(mat)
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`5
    A
    ABA
    ABA
    A
    A`);
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