const { Command } = require("commander");

var program=new(Command)


program.argument("<name1>","enter the name ")
        .argument("[number]","enter u r number ")

    .action(function(name1,number) {
        console.log("name1" , name1)
        console.log("number" , number)        
    })

program.parse(process.argv);