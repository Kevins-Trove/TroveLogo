// Constructor Square is imported.
const Triangle = require( '../lib/triangleClass');

// A testing suite for Square is created.
describe('Triangle', () => {
  describe('render', () => {
    it('should take text of color and return rendered string for SVG', () => {
      const triangle = new Triangle("#000000");
      expect(triangle.render()).toEqual('<polygon points="150,20 50,180 250,180" fill="#000000" />');
    });
  });
});
