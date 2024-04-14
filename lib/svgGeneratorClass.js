//------------------------------------------------------------
// svgGeneratorClass
//
// Main class to create and SVG from text prompts
//------------------------------------------------------------

//------------------------------------------------------------
// Packages
//------------------------------------------------------------
const fs = require('fs');
const ColorPicker = require('./colorPickerClass');
const Triangle = require('./triangleClass');
const Circle = require('./circleClass');
const Square = require('./squareClass');

//------------------------------------------------------------
// Global variables
//------------------------------------------------------------

//------------------------------------------------------------
// Class declaration
//------------------------------------------------------------
class SvgGeneratorClass {
  constructor(questions) {
    // color names are converted to hex values by colorpicker
    this.text = questions.text;
    this.backColor = new ColorPicker().find(questions.backColor).value ;
    this.textColor = new ColorPicker().find(questions.textColor).value;
    this.shape = questions.shape;
    this.shapeColor = new ColorPicker().find(questions.shapeColor).value;
    this.filename = questions.fileName;
  }
};

//------------------------------------------------------------
// Class function prototypes
//------------------------------------------------------------

// Controling function for class
SvgGeneratorClass.prototype.render = function (){
  let shape;
  
  switch (this.shape) {
    case 'circle':
      shape = new Circle(this.shapeColor);
      break;
    case 'square':
      shape = new Square(this.shapeColor);
      break;
    case 'triangle':
      shape = new Triangle(this.shapeColor);
      break;
    default:
      // deafult to a circle if no matching shape
      shape = new Circle(this.shapeColor);
  } 
   

  const svg = `
    <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" fill="${this.backColor}" />
    
    ${shape.render()}
    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

    </svg>`;

    return svg;
};


// Write to file, calls render function
SvgGeneratorClass.prototype.writeToFile = function (){
  const out = `./examples/${this.filename}.svg`;

  console.log(`----------------------------------------------------------------------`);
  fs.writeFile(out, this.render(), (err) => {
    if (err) {
      console.error('\x1b[31m%s\x1b[0m', `Error: ${err}`);
      return;
    }
    console.log('\x1b[32m%s\x1b[0m',`${out} file has been created.`);
  });
};

module.exports = SvgGeneratorClass;

