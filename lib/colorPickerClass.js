//------------------------------------------------------------
// colorPickerClass
//------------------------------------------------------------

//------------------------------------------------------------
// Packages
//------------------------------------------------------------
const fs = require('fs');
const colorList = require('./colors.json');
//------------------------------------------------------------
// Global variables
//------------------------------------------------------------
//colorFile = "./lib/colors.csv";

//------------------------------------------------------------
// Class declaration
//------------------------------------------------------------
class ColorPicker {
  constructor() {
    this.color = 0;
    this.colors = colorList;
  }
};

//------------------------------------------------------------
// Class function prototypes
//------------------------------------------------------------

// Controling function for Shape class
ColorPicker.prototype.render = function (){
  
  
};

// Controling function for Shape class
ColorPicker.prototype.find = function (value){
    return this.colors.find(value);
  
};

// // Write to file, calls render function
// ColorPicker.prototype.readFile = function (){
  
//     fs.readFile(colorFile, 'utf8', (err, data) => {
//         if (err) {
//           console.error('Error reading file:', err);
//           return;
//         }
//         // Log the contents of the file as a string
//   console.log('File contents:', data);
// };

module.exports = ColorPicker;

