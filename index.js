// TODO: Include packages needed for this application
const generateMarkdown = require("./generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
const { title } = require("process");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the project title?",
    name: "title",
    default: title,
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "enter a title to continue";
      }
    },
  },
  {
    type: "input",
    message: "how do you install your app?",
    name: "installation",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "enter a installation details to continue";
      }
    },
  },
  {
    type: "input",
    message: "add instructions here",
    name: "instructions",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "enter app instructions to continue";
      }
    },
  },
  {
    type: "input",
    message: "What's your app all about?",
    name: "description",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "enter a title to continue";
      }
    },
  },
  {
    type: "input",
    message: "How do you use your app?",
    name: "usage",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "enter a title to continue";
      }
    },
  },
  {
    type: "list",
    message: "What licenses did you use?",
    choices: ["Apache", "MIT", "ISC", "Mozilla", "None"],
    name: "license",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "enter a title to continue";
      }
    },
  },
  {
    type: "input",
    message: "Who contributed to the project?",
    name: "Credits",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "enter a title to continue";
      }
    },
  },
  {
    type: "input",
    message: "contact info",
    name: "Contact",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "enter a title to continue";
      }
    },
  },
];

// TODO: Create a function to write README file
writeToFile = (fileName, data) => {};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    fs.writeFileSync("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
