//------------------------------------------------------------
// triangleClass
//------------------------------------------------------------

//------------------------------------------------------------
// Packages
//------------------------------------------------------------
const Shape = require('./shapeClass');

//------------------------------------------------------------
// Class declaration
//------------------------------------------------------------
  
  // Triangle class inherits from Shape
class Triangle extends Shape {
  constructor(color) {
    super('Triangle', color);
  }

  // Render method for Triangle
  render() {
      return `<polygon points="150,20 50,180 250,180" fill="${this.color}" />`; 
  }
}

module.exports = Triangle; 