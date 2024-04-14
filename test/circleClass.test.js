// Constructor Square is imported.
const Circle = require( '../lib/circleClass');

// A testing suite for Square is created.
describe('Circle', () => {
  describe('render', () => {
    it('should take text of color and return rendered string for SVG', () => {
      const circle = new Circle("#000000");
      expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="#000000" />');
    });
  });
});
