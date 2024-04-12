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
main();

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
      name: 'backColor',
      message: 'Background color (enter color name or hex)?',
      validate: function(input) {
        const c = new ColorPicker().find(input);
        const colorNames = [];

        // check for no matches
        if (c.length == 0) {
          return 'Unrecognizedized color';
        }

        // check for more than one match
        if (c.length > 0) {
          c.forEach(e => {
            colorNames.push( e.color);
        })
          
          return `Type complete name (${colorNames.join(", ")})`;
        }
        
        return true; // Return true if the input is valid
      }
      
    },
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
        type: 'input',
        name: 'textColor',
        message: 'Text Color (enter color name or hex)?',
        validate: function(input) {
          const c = new ColorPicker().find(input);
          const colorNames = [];

          // check for no matches
          if (c.length == 0) {
            return 'Unrecognizedized color';
          }

          // check for more than one match
          if (c.length > 0) {
            c.forEach(e => {
              colorNames.push( e.color);
          })
            
            return `Type complete name (${colorNames.join(", ")})`;
          }
          
          return true; // Return true if the input is valid
        }
        
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
        message: 'Shape Color?',
        validate: function(input) {
          const c = new ColorPicker().find(input);
          const colorNames = [];

          // check for no matches
          if (c.length == 0) {
            return 'Unrecognizedized color';
          }

          // check for more than one match
          if (c.length > 0) {
            c.forEach(e => {
              colorNames.push( e.color);
          })
            
            return `Type complete name (${colorNames.join(", ")})`;
          }
          
          return true; // Return true if the input is valid
        }
        
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'File name for logo?',
        default: "logo"
      }
    ])
    .then((answers) => {
      const shape = new Shape(answers);
      shape.writeToFile();
    });
}



