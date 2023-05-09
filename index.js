const fileName = "./examples/logo.svg";
const fs = require('fs');
const setShape = require('./lib/setShape.js');
const questions = require('./lib/questions.js');



async function init() {
  const { default: inquirer } = await import('inquirer');

  inquirer
    .prompt(questions)
    .then((response) => {
      const svg = setShape(response);
      fs.writeFile(fileName, svg, () => console.log('Generated logo.svg'));
    })
    .catch((err) => {
      console.log(err);
    });
}

init();
