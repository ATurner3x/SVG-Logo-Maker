// REQUIRE INQUIRER
const inquirer = require('inquirer');

//
const SVG = require('svg.js');
const svg = document.createElementNS("<http://www.w3.org/2000/svg>","svg");
// Set the width and height of the <svg> element
svg.setAttribute("width", "200");
svg.setAttribute("height", "300");
// Create a <rect> element
const rect = document.createElementNS(
  "<http://www.w3.org/2000/svg>",
  "rect"
);



const circle = svg.circle(100).fill('#FF0000');
const svgString = svg.svg();




//LOGO REQUIREMENTS
inquirer.prompt([

  //Logo text

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
    //Text color
    
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for the text:',
    },
    //logo shape
    
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
   //shape color
   
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

  const fs = require('fs');

fs.writeFileSync('logo.svg', svgString);
console.log('Generated logo.svg');
process.exit();


