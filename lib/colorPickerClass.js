//------------------------------------------------------------
// colorPickerClass
//------------------------------------------------------------

//------------------------------------------------------------
// Packages
//------------------------------------------------------------
const fs = require('fs');
const colorList = require('./colors.json');

//------------------------------------------------------------
// Class declaration
//------------------------------------------------------------
class ColorPicker {
  constructor() {
    this.color = "#000000"; // deafult color is black
    this.colors = colorList;
  }
};

//------------------------------------------------------------
// Class function prototypes
//------------------------------------------------------------

// Force text input to match entry in color list
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

    // Check for hexidecial
    const hexPattern = /#(?:[0-9a-fA-F]{3}){1,2}\b/g;
    const hex = test.match(hexPattern);

    if (hex) return exactMatch =  { "color" : hex, "value" : hex};
    
    if (exactMatch) {
        return exactMatch;
    } else  {
        return matches;
    }
    
};

module.exports = ColorPicker;

