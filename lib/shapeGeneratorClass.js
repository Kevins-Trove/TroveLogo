//------------------------------------------------------------
// shapeGeneratorClass
//
// Main class to create and SVG from text prompts
//------------------------------------------------------------

//------------------------------------------------------------
// Packages
//------------------------------------------------------------
const fs = require('fs');

//------------------------------------------------------------
// Global variables
//------------------------------------------------------------

//------------------------------------------------------------
// Class declaration
//------------------------------------------------------------
class Shape {
  constructor(questions) {
    this.text = questions.text;
    this.textColor = questions.textColor;
    this.shape = question.shape;
    this.shapeColor = shapeColor;
  }
};

//------------------------------------------------------------
// Class function prototypes
//------------------------------------------------------------

// Controling function for Shape class
Shape.prototype.render = function (){
  
  
};


// Write to file, calls render function
Shape.prototype.writeToFile = function (){
  console.log(`----------------------------------------------------------------------`);
  fs.writeFile(readMeFileName, items, (err) => {
    if (err) {
      console.error('\x1b[31m%s\x1b[0m', 'Error:', err);
      return;
    }
    console.log('\x1b[32m%s\x1b[0m','README.md file has been created.');
  });
};

module.exports = Shape;

