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
      name: "questions_user_name",
      type: "input",
      message: "What is your Github user name?"
    },

    {
      name: "questions_github_link",
      type: "input",
      message: "What is your Github profile link?"
    },

    {
      name: "questions_email",
      type: "input",
      message: "What is your email address?"
    },

    {
      name: "image_link",
      type: "input",
      message: "Enter a preview image URL: "
    },

    {
      name:  "video_link",
      type: "input",
      message: "Enter DEMO video link: "
    },


    {
     name:'license',
     type: 'list',
     message: 'Choose Your License',
     choices: ['cc', 'ecl-2.0', 'osl-3.0']
     
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
