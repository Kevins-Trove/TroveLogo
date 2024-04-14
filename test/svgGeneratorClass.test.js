// Constructor svgGeneratorClass is imported.
const Svg = require( '../lib/svgGeneratorClass');

// A testing suite for Square is created.
describe('svgGeneratorClass', () => {
  describe('render', () => {
    it('should take user questions and rendered string of SVG', () => {
      const svg = new Svg({
        backColor: 'white',
        text: 'XYZ',
        textColor: 'blue',
        shape: 'Circle',
        shapeColor: 'red',
        fileName: 'logo'
      });

      expect(svg.render()).toEqual(`<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ffffff\" /><circle cx=\"150\" cy=\"100\" r=\"80\" fill=\"#ff0000\" /><text x=\"150\" y=\"125\" font-size=\"60\" text-anchor=\"middle\" fill=\"#0000ff\">XYZ</text></svg>`);
    });
  });
});
