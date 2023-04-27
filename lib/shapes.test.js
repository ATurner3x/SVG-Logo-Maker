const SVG = require('svg.js');
const makeLogo = require('./makeLogo');

describe('makeLogo', () => {
  test('creates a circle with the specified color', () => {
    const svg = SVG(document.documentElement).size(300, 200);
    makeLogo(svg, 'red', 'circle', 'blue');
    expect(svg.children()[0].attr('fill')).toBe('red');
  });

  test('creates a triangle with the specified color', () => {
    const svg = SVG(document.documentElement).size(300, 200);
    makeLogo(svg, 'green', 'triangle', 'yellow');
    expect(svg.children()[0].attr('fill')).toBe('green');
  });

  test('creates a square with the specified color', () => {
    const svg = SVG(document.documentElement).size(300, 200);
    makeLogo(svg, 'purple', 'square', 'pink');
    expect(svg.children()[0].attr('fill')).toBe('purple');
  });
});