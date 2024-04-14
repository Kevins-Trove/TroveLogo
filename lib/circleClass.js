//------------------------------------------------------------
// CircleClass
//------------------------------------------------------------

//------------------------------------------------------------
// Packages
//------------------------------------------------------------
const Shape = require('./shapeClass');

//------------------------------------------------------------
// Class declaration
//------------------------------------------------------------
  
// Circle class inherits from Shape
class Circle extends Shape {
constructor(color) {
    super('Circle', color);
}

// Render method for Circle
render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`; 
}
}

module.exports = Circle;
  