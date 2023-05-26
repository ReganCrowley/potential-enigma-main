const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown')

inquirer
  .prompt([
    {
      type: 'input',
      name: 'project',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the project description?',

    },
    {
      type: 'input',
      name: 'installation',
      message: 'what installation instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'what is the usage information',
    },
    {
      type: 'list',
      name: 'license',
      message: 'what license are you using?',
      choices: ['none', 'Apache License 2.0', 'MIT License', 'GNU General Public License v3.0'],
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'what is the contribution guide line?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'what are the testing stats?',
    },
    {
      type: 'input',
      name: 'username',
      message: 'what is your github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'what is your email?',
    },
  ])
  .then((promptData) => {
    const filename = `${promptData.project.toLowerCase().split(' ').join('')}.md`;
    const markdown = generateMarkdown(promptData)
    fs.writeFile(filename, markdown, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
