// REQUIRE INQUIRER
const inquirer = require('inquirer');

//
const SVG = require('svg.js');
const svg = SVG(document.documentElement).size(300, 200);
const circle = svg.circle(100).fill('#FF0000');
const svgString = svg.svg();

inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters of text:',
      validate: (input) => {
        if (input.length > 3) {
          return 'Please enter no more than three characters.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for the text:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal number for the shape:',
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    console.error(error);
  });

  