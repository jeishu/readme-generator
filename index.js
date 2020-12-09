const inquirer = require("inquirer");
const fs = require("fs");

let readme = (github, githubLink, email, projectName, description, usage) => { 
    return `
# ${projectName}
![GitHub license](https://img.shields.io/badge/license-APACHE 2.0-blue.svg)
​
## Description
​
${description}
​
## Table of Contents 
​
* [Installation](#installation)
​
* [Usage](#usage)
​
* [License](#license)
​
* [Contributing](#contributing)
​
* [Tests](#tests)
​
* [Questions](#questions)
​
## Installation
​
To install necessary dependencies, run the following command:
​

npm i

​
## Usage
​
${usage}
​
## License
​
This project is licensed under the APACHE 2.0 license.

## Contributing
​
N/A
​
## Tests
​
To run tests, run the following command:
​

npm test

​
## Questions
​
If you have any questions about  the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${github}](${githubLink}).
        ​
        `;
}

var questions = [
    {
        type: 'input',
        name: 'github',
        message: "What's your github name?",
        // If you don't have something, and they hit enter, this is a default
        default: "I don't have a github Account"
    },
    {
        type: 'input',
        name: 'githubLink',
        message: "What is your github profile link",
        // If you don't have something, and they hit enter, this is a default
        default: "I don't have a github profile link"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email?",
        // If you don't have something, and they hit enter, this is a default
        default: "I don't have or want to use an email."
    },
    {
        type: 'input',
        name: 'projectName',
        message: "What's your project name?",
    },
    {
        type: 'input',
        name: 'description',
        message: "A short description of your project:",
    },
    {
        type: 'input',
        name: 'usage',
        message: "A short description of how your application is used:",
    },
];

inquirer
  .prompt(
    // Prompts for questions
      questions)
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers);
    const {github, githubLink, email, projectName, description, usage} = answers;

    const template = readme(github, githubLink, email, projectName, description, usage);
    
    fs.writeFile('README.md', template, (err) => {
        if (err) throw err;
        console.log('The README.md is created');
    });
  })
  .catch(error => {
    console.log(error);
  });
