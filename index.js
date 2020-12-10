const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const userInputs = () =>
    inquirer.prompt([ 
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
            message: "What is your email?"
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
            message: "A short description of how your application is used: ",
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT"
            ]
        },
        {
            type: 'input',
            name: 'contributors',
            message: "List any contributors if any: ",
            default: "There are no other contributors."
        },
        {
            type: 'input',
            name: 'test',
            message: "List any tests done if any: ",
            default: "There were no test run for this application. (shame on you)"
        },
        {
            type: 'input',
            name: 'questions',
            message: "Any comments you would like your users to know? ",
            default: "There are no comments. (You should say soemthing anyways)"
        }
    ]);

const generateREADME = (answers) => 
`# ${answers.projectName}
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
​
## Description
​
${answers.description}
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
💾 ${answers.installation}

## Usage
​
💻 ${answers.usage}
​
## License
​
This project is licensed under the ${answers.license}.

## Contributing
​
👪 ${answers.contributors}
​
## Tests
​
✏️ ${answers.tests}

## Questions
​
✋ ${answers.questions}

✉️ Email me with any questions: ${answers.email}
you can find more of my work at [${answers.github}](${answers.githubLink}).


_🔥🔥🔥 This README was generated with ❤️ by [ReadMe Generator](https://github.com/jeishu/readme-generator) 🔥🔥🔥_`;

userInputs()
    .then((answers) => writeFileAsync("README.md", generateREADME(answers)))
    .then(() => console.log("Your README file has been created."))
    .catch((err) => console.error(err));