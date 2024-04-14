//------------------------------------------------------------
// squareClass
//------------------------------------------------------------

//------------------------------------------------------------
// Packages
//------------------------------------------------------------
const Shape = require('./shapeClass');

//------------------------------------------------------------
// Class declaration
//------------------------------------------------------------
  
// Square class inherits from Shape
class Square extends Shape {
    constructor(color) {
        super('Square', color);
    }

    // Render method for Square
    render() {
        return `<polygon points="75,25 225,25 225,175 75,175" fill="${this.color}" />`;
    }
 }

module.exports = Square;