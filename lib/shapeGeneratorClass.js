//------------------------------------------------------------
// shapeGeneratorClass
//
// Main class to create and SVG from text prompts
//------------------------------------------------------------

//------------------------------------------------------------
// Packages
//------------------------------------------------------------
const fs = require('fs');
const ColorPicker = require('./colorPickerClass');

//------------------------------------------------------------
// Global variables
//------------------------------------------------------------

//------------------------------------------------------------
// Class declaration
//------------------------------------------------------------
class Shape {
  constructor(questions) {
    this.text = questions.text;
    this.backColor = questions.backColor;
    this.textColor = questions.textColor;
    this.shape = questions.shape;
    this.shapeColor = questions.shapeColor;
    this.filename = questions.fileName;
  }
};

//------------------------------------------------------------
// Class function prototypes
//------------------------------------------------------------

// Controling function for Shape class
Shape.prototype.render = function (){
  const c = new ColorPicker();
  let s = "";
  
  switch (this.shape) {
    case 'circle':
      s = `<circle cx="150" cy="100" r="80" fill="${c.find(this.shapeColor).value}" />`;
      break;
    case 'square':
      s = `<polygon points="50,10 90,90 10,90" fill=${c.find(this.shapeColor).value}" />`;
      break;
    case 'triangle':
      s = `<polygon points="100,10 50,90 150,90" fill=${c.find(this.shapeColor).value}" />`;
      break;
    default:
      s = `<polygon points="50,10 90,90 10,90" fill=${c.find(this.shapeColor).value}" />`;
  } 
   

  const svg = `
    <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" fill="${c.find(this.backColor).value}" />
    
    ${s}
    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${c.find(this.textColor).value}">${this.text}</text>

    </svg>`;

    return svg;
};


// Write to file, calls render function
Shape.prototype.writeToFile = function (){
  const out = `${this.filename}.svg`;

  console.log(`----------------------------------------------------------------------`);
  fs.writeFile(out, this.render(), (err) => {
    if (err) {
      console.error('\x1b[31m%s\x1b[0m', `Error: ${err}`);
      return;
    }
    console.log('\x1b[32m%s\x1b[0m',`${out} file has been created.`);
  });
};

module.exports = Shape;

