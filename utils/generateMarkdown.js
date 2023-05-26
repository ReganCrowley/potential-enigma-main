function generateMarkdown(data) {
  return `# ${data.project}

## Description

${data.description}

## Installation

${data.installation}

## Usage Information

${data.usage}

## License

${data.license}

## Contribution Guidelines

${data.contribution}

## Test

${data.tests}

## Questions

- ${data.username}

- ${data.email}
`
}

module.exports = generateMarkdown;
