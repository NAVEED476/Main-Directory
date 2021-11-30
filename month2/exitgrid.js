function ExitGrid(arr) {
    var i=0;
    var j=0;
    var count = 0;
    while(i>=0 && j>=0 && i<arr.length && j<arr.length) {
        if(arr[i][j] === 'X')
        {
            return 0;
        } 
        if(arr[i][j] === 'L')
        {
            arr[i][j] = 'X';
            j--;
        }
        else if(arr[i][j] === 'R')
        {
            arr[i][j] = 'X';
            j++;
        }
        else if(arr[i][j] === 'U')
        {
            arr[i][j] = 'X';
            i--;
        }
        else if(arr[i][j] === 'D')
        {
            arr[i][j] = 'X';
            i++;
        }
        count++;
    }
    return count;
}



function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    var test = +input[0];
    var line = 1;
    for(var k=0;k <test; k++)
    {
        var size = Number(input[line++]);
        var mat = [];
        for(var i=0;i < size; i++)
        {
            mat.push(input[line++].trim().split(""));
        }
        console.log(ExitGrid(mat))

    }

}
if (process.env.USERNAME === "naveed") {
    runProgram(`3
    4 
    RRRR
    LLLL
    UUUU
    DDDD
    3
    LRL
    UUU
    DLR
    2
    RL
    DD
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
        process.exit(0);
    });
}