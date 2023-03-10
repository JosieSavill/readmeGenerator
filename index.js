// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js")


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
    },

    {
     name:'license',
     type: 'list',
     message: 'Choose Your License',
     choices: ['cc', 'ecl-2.0', 'osl-3.0']
     
    }
     
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile


//WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// 

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// 

// include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.
// Refer to the Fullstack Blog Video Submission Guide for additional guidance on creating a video.


// Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.

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
        
   

        writeToFile("README.md", generateMarkdown(answers))
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
