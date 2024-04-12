//------------------------------------------------------------
// Packages
//------------------------------------------------------------
const inquirer = require('inquirer');
//const inquirerColor = require('inquirer-color').default;
const Shape = require('./lib/shapeGeneratorClass');
const ColorPicker = require('./lib/colorPickerClass');

//------------------------------------------------------------
// Default values
//------------------------------------------------------------
//inquirer.registerPrompt('color', inquirerColor);
//------------------------------------------------------------
// Start and initialize app
//------------------------------------------------------------
//main();
const c = new ColorPicker();
console.log(c.find("red"));

//------------------------------------------------------------
// Main
//------------------------------------------------------------
function main() {
  console.log(`----------------------------------------------------------------------`);
  console.log('\x1b[33m%s\x1b[0m',`Trove Logo Generator`);
  console.log('\x1b[33m%s\x1b[0m',`Answer dynamic prompts to autogenerate SVG logo.`);
  console.log(`----------------------------------------------------------------------`);
  inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Logo text?',
        validate: function(input) {
          // force length to 3 character long
          if (input.trim().length != 3) {
            return 'Username must be 3 character long';
          }
          return true; // Return true if the input is valid
        }
      },
      {
        type: 'color',
        name: 'textColor',
        message: 'Text Color (enter key work or hex)?',
        format: 'hex', 
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Shape behind text?',
        choices: ["circle", "square", "triangle"],
        default: "circle"
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Shape Color?'
      }
    ])
    .then((answers) => {
      const myReadMe = new ReadMe(answers);
      myReadMe.writeToFile();
    });
}


const svg = `
    <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" fill="red" />

    <circle cx="150" cy="100" r="80" fill="green" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

    </svg>`;
