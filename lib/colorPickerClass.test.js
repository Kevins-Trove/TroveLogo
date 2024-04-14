// Constructor svgGeneratorClass is imported.
const ColorPicker = require( '../lib/colorPickerClass');

// Test for exact match
describe('ColorPicker', () => {
  describe('find', () => {
    it('Exact match should take text and find matching color in list and return key pair of name and hex value', () => {
      const colorPicker = new ColorPicker();

      expect(colorPicker.find("black")).toEqual({"color": "Black", "value": "#000000"});
    });
  });
});

// Failing test for 
describe('ColorPicker', () => {
    describe('find', () => {
      it('Wild card match should take text and find mulitple values that match in list as key pair of name and hex value', () => {
        const colorPicker = new ColorPicker();
  
        expect(colorPicker.find("powder")).toEqual( [{"color": "Dark powder blue", "value": "#003399"}, {"color": "Powder blue", "value": "#b0e0e6"}]);
      });
    });
  });