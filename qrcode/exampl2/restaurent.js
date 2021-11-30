var inquirer = require('inquirer');
console.log('hello welcome')
inquirer
  .prompt([
    /* Pass your questions in here */

    {
        type:"input",
        message:"enter u r name",
        name:"username"
    },
    {
        type:'password',
        message:"enter u r password",
        mask:"*",
        name:"password"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
   console.log("username",answers.username)

   inquirer.prompt([
       {
           type:"list",
           message:"please select the service",
           name:"for delvery",
           choices:[
               "homedelivery",
               "table delevery"
           ],
           validata(value){
               var pass=value.homedelivery
               if(pass){
                return "enter u phone number"
               }
           }
       }
   ])
  .then(answers=>{
      console.log("provided details")
      console.log(answers)
      
  })

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
