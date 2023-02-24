const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Skeleton structure provided by class instructor Dan Mueller
const employees = [];
inquirer.prompt([{
    //manager questions
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    validate: function (input) {
        const name = input.trim();
        if (!name || typeof name !== "string") {
            return "Please enter a valid name.";
        } else if (/\d/.test(name)) { // Check if the name contains any numbers
            return "Name cannot contain numbers.";
        } else if (/[^\w\s]/gi.test(name)) { // Check if the name contains any special symbols
            return "Name cannot contain special symbols.";
        } else {

            return true;
        }
    }
},

{
    type: 'input',
    name: 'id',
    message: 'What is your ID number?',
    validate: function (input) {
        const id = input.trim();
        if (!id || !/^\d+$/.test(id)) {
            return "Please enter a valid ID with digits only.";
        }
        return true;
    }
},


{
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    validate: function (input) {
        const email = input.trim();
        if (!email || !email.includes("@")) {
            return "Please enter a valid email address.";
        }
        return true;
    }
},

]).then(response => {
    const manager = new Manager(response.name, response.id, response.email);
    employees.push(manager);
    promptForNextEmployee();
})

const promptForNextEmployee = () => {
    inquirer.prompt([{
        // choice of 3
    }]).then(response => {
        // if engineer
        //    promptForEngineer
        // else if intern
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team
    })
}

const promptForEngineer = () => {
    inquirer.prompt([{
        //engineer questions
    }]).then(response => {
        // add new engineer to employees array
        // promptForNextEmployee
    })
}

const promptForIntern = () => {
    inquirer.prompt([{
        //intern questions
    }]).then(response => {
        // add new intern to employees array
        // promptForNextEmployee
    })
}

const buildPage = () => {
    // render(myArrayOfTeamMembers)
}