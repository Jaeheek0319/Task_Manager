const inquirer = require('inquirer');
const fs = require("fs");
const { brotliDecompressSync } = require('zlib');
const { burlywood } = require('color-name');

inquirer.prompt([{
    type: "input",
    message: "Do you want to add to the list?",
    name: "Addlist"
}]).then((answer) => {
    console.log(answer)
    if(answer.Addlist === "yes") {
        inquirer.prompt([{
            type: "input",
            message: "What is the task?",
            name: "TaskName"
        },{
            type: "input",
            message: "When is task?",
            name: "TaskTime"
        },{
            type: "input",
            message: "Where is the task?",
            name: "TaskLocation"
        }]).then((answers) => {
            console.log(answers)

            // read the html file
            fs.readFile("page.html",'utf8',(err, data) => {
                if (err) {
                    return err;
                }
                var page = data.split('//insert')
                console.log(page)
                // add additonal entry
                var template = `
                <div>${answers.TaskName}</div>
                <div>${answers.TaskLocation}</div>
                <div>${answers.TaskTime}</div>
                
                //insert
                `
            newPage = page[0] + template + page[1] 
            console.log(newPage)
                // write it back
            fs.writeFileSync("page.html", newPage, 'utf8');
            });
        });
    };
}); 


//    console.log("data", data);
  //  fs.writeFileSync("game-log.txt", data + '\n' + fileString, 'utf8');
//});

