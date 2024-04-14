// Constructor Square is imported.
const Square = require( '../lib/squareClass');

// A testing suite for Square is created.
describe('Square', () => {
  describe('render', () => {
    it('should take text of color and return rendered string for SVG', () => {
      const square = new Square("#000000");
      expect(square.render()).toEqual('<polygon points="75,25 225,25 225,175 75,175" fill="#000000" />');
    });
  });
});
