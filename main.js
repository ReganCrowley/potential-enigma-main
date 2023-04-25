const fs = require('fs');

const content = `## Description
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
`;



try {
  fs.writeFileSync('Test.md', content);
  // file written sucessfully
} catch (err) {
  console.error(err);
}
