const inquirer = require('inquirer');

inquirer.prompt([{
    type: "input",
    message: "Do you want to add to the list?",
    name: "favColor"
}]).then((answer) => {
    console.log(answer)
    if(answer === "yes"){
        print("success")

    } 
});