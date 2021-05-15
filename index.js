// Packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// List of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the name of the project?",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the projects name!');
              return false;
            }
        }
    },
    {
        type:'input',
        name: 'userName',
        message: 'What is your GitHub user name.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief descritption of the project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What needs to be installed or source-linked in order for this app to work?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this app used for?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project.'
    },
    {
        type: 'input',
        name :'steps',
        message: 'What Steps were taken to code this app?'
    }, 
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license(s) did you use.',
        choices: [
            'GNU General Public', 
            'MIT',
            'Unlicense',
            'Apache'
        ]
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    }
];

// Writes README file
function writeToFile(fileName, data) {

    fs.writeFile("./dist/"+fileName, data, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log ("Successfully wrote: " + fileName);
    })
    
    }

// Initializes app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
      writeToFile("demoREADME.md", generateMarkdown(data));
    })
  }


init();