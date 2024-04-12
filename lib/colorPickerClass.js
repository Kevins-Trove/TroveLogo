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
    this.color = "#000000";
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
    let test = new String(value).trim().toLowerCase();
    let matches = [];
    let exactMatch ;

    // search for matching name
    this.colors.forEach(e => {
        const colorName = new String(e.color).toLowerCase();
        
        // Check for matching hex number
        if (colorName.includes(test)) {
            matches.push(e);
        }

        // check for exact match
        if (colorName == test) {
            exactMatch = e;
        }
    });

    if (exactMatch) {
        return exactMatch;
    } else  {
        return matches;
    }
    
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

