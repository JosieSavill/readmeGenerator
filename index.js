// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require("fs");
const generateMarkdown = require("./generateMarkdown")

// TODO: Create an array of questions for user input
// description, installation instructions, usage information, contribution guidelines, and test instructions
const questions = [
    {
        name: "name_of_project",
        type: "input",
        message: "What is the name of your project?"
    },
    {
        name: "description",
        type: "input",
        message: "Can you describe your project?"
    },
    {
        name: "installation_instructions",
        type: "input",
        message: "What are your install instructions?"
    },


    {
      name: "usage_information",
      type: "input",
      message: "What is your usage information?"
    },

    {
      name: "contribution_guidelines",
      type: "input",
      message: "What are your contribution guidelines?"
    },

    {
      name: "test_instructions",
      type: "input",
      message: "What are the test instructions?"
     }




];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {


    fs.writeFile( fileName, data, {},()=>{

        console.log("i am done writing");
    }) ;


}

// TODO: Create a function to initialize app
function init() {



    inquirer
      .prompt(questions)
      .then((answers) => {
        console.log(answers.name_of_project);
        console.log(answers.description);
        console.log(answers.installation_instructions);
        console.log(answers.usage_information);
        console.log(answers.contribution_guidelines);
        console.log(answers.test_instructions);
        // Use user feedback for... whatever!!
        // let str = "# "  + answers.name_of_project + "\n \n";
        // str += "## Description"  + "\n \n";
        // str +=  answers.description  + "\n \n";
        // str += 

        writeToFile("README2.md", generateMarkdown(answers))
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });


}

// Function call to initialize app
init();
