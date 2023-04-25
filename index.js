const inquirer = require('inquirer');
const fs = require('fs');


const template = `# Title

## Description
(Insert description here)

## Installation
(Insert Installations here)
## Usage Information
(Insert Usage information here)

## License
(Insert License here)

## Contribution Guidelines
(Insert guidelines here)

## Test
(Insert testing instructions here)

## Questions
(Insert username and email here)
`

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
        message: 'what is your email??',
      },

  ])
  .then((dogs) => {
    console.table(dogs)
    const filename = `${dogs.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(dogs, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
