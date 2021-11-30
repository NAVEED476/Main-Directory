function runProgram(input) {
    // Write code here

    input = input.split("\n")
    let len = +input[0]
    let line = 1

    for (var i = 0; i < len; i++) {
        var [type, team, teammate] = input[line++].trim().split(" ")

        console.log(type, team, teammate)



        var obj={
            q1:[],
            q2:[],
            q3:[],
            q4:[]
        }

        var master=[]

        if(type==="E"){
            enque([team,teammate]);
        }
        else{
            dequeue();
        }

        function enque(val){
            if(!master.includes(val[0])){
                master.push("q"+val[0])
            }
        }
        function dequeue(){
            if(obj[master[0]].length!=0){
                obj.master[0].shift();
            }
        }
    }



}
if (process.env.USERNAME === "naveed") {
    runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
    D`);
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
        process.exit(0);
    });
}