//------------------------------------------------------------
// Trove Logo generator app
//------------------------------------------------------------

//------------------------------------------------------------
// Packages
//------------------------------------------------------------
const inquirer = require('inquirer');
const SvgGeneratorClass = require('./lib/svgGeneratorClass');
const ColorPicker = require('./lib/colorPickerClass');

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
        return validateColor(input);
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
        validate:  function(input) {
          return validateColor(input);
        }
        
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Shape behind text?',
        choices: ["Circle", "Square", "Triangle"],
        default: "circle"
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Shape Color?',
        validate:  function(input) {
          return validateColor(input);
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
      const svg = new SvgGeneratorClass(answers);
      svg.writeToFile();
    });
}

//------------------------------------------------------------
// Support functions
//------------------------------------------------------------

// Forces text entry to color list
function validateColor(input) {
  const c = new ColorPicker().find(input);
  const colorNames = [];

  // check for no matches
  if (c.length == 0) {
    return 'Unrecognizedized color';
  }

  // check for more than one match, give user list of choices
  if (c.length > 1) {
    c.forEach(e => {
      colorNames.push( e.color);
  })
    
    return `Type complete name from suggested colors (${colorNames.join(", ")})`;
  }
  
  return true; // Return true if the input is valid
}
