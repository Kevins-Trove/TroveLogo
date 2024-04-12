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
  
  console.log(this.backColor, c.find(this.backColor),c.find(this.backColor).value);
  console.log(this.textColor);
  console.log(this.shapeColor);
  switch (this.shape) {
    case 'circle':
      s = `<circle cx="150" cy="100" r="80" fill="${c.find(this.shapeColor).value}" />`;
      break;
    case 'square':
      s = `<polygon points="75,25 225,25 225,175 75,175" fill="${c.find(this.shapeColor).value}" />`;
      break;
    case 'triangle':
      s = `<polygon points="150,20 50,180 250,180" fill="${c.find(this.shapeColor).value}" />`;
      break;
    default:
      s = `<polygon points="100,10 200,10 200,190 100,190" fill="${c.find(this.shapeColor).value}" />`;
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

