var inquirer = require('inquirer');

console.log("welcome to app")
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"input",
        message:"enter your username",
        name:"username"
    },
    {
        type:"password",
        message:"enter ur password",
        name:"password"
    },
    {
        type:"password",
        message:"enter ur password",
        mask:"#",
        name:"confirm password"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("user name ",answers.username)

    inquirer.prompt([
        {
            type:"confirm",
            name:"for delivery",
            message:"do you want the pizza to be delivered",
            default:true
        },
        {
            type:"input",
            name:"phone",
            message:"enter u r phone number",
            validate(value){
                var pass=value.length==10
                if(pass){
                    return true
                }else{
                    return "enter a valid phone number"
                }
            }
        },
        {
            type:"input",
            name:"qty",
            message:"ennter the required quantity",
            validate(value){
                var valid=!isNaN(parseInt(value));
                return valid || "enter a number"
            },
            filter(value){
                return parseInt(value)
            }
        },
        {
            type:"list",
            name:"topppings",
            message:"please select the type u want",
            choices:[
                "chicken",
                "butter",
                "something",
                "non"
            ]
        },
        {
            type:"list",
            name:"size",
            message:"please select t    he size u wanted",
            choices:[
                "l",
                "m",
                "s"
            ]
        }
        
       
    ])
    .then(answers=>{
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