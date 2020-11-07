// Get the packages included
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./generate.js');

// // function to write README file
// function writeToFile(fileName, questions) {
//     fs.appendFile('test.txt', questions.title, 
//     function(){});
// }

// function to initialize program
function init() {
    inquirer.prompt(questions).then(questions => {
        let x = md(questions);
        // writeToFile('test.txt', x);
        fs.writeFile('project.md', x, function(){});
        
    })

}

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'what is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a description of your project.',
        name: "desc"
    },
    {
        type: 'input',
        message: 'How do you install it?',
        name: "install"
    },
    {
        type: 'input',
        message: 'How should people use it?',
        name: "use"
    },
    {
        type: 'input',
        message: 'How do people contribute?',
        name: "contribute"
    },
    {
        type: 'input',
        message: 'How do people test?',
        name: "test"
    },
    {
        type: 'input',
        message: 'How do you install it?',
        name: "install"
    },
    {
        type: 'list',
        message: 'Choose a license to protect your IP.',
        name: "license",
        choices: ['Apache', 'MIT', 'Creative Commons', 'Mozilla']
    },
    {
        type: 'input',
        message: 'Whats your Github username?',
        name: "username"
    },
    {
        type: 'input',
        message: 'Whats email is best for contact?',
        name: "email"
    }

];

// function call to initialize program
init();
