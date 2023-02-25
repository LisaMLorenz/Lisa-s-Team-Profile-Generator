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

const employees = []; // array to hold team members

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

{
    type: 'input',
    name: 'officeNumber',
    message: 'What is your office number?',
    validate: function (input) {
        const officeNumber = input.trim();
        if (!officeNumber || !/^\d+$/.test(officeNumber)) {
            return "Please enter a valid office with digits only.";
        }
        return true;
    }
},

]).then(response => {
    const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
    employees.push(manager);
    promptForNextEmployee();
})

const promptForNextEmployee = () => {
    inquirer.prompt([{

        type: 'list',
        message: 'What is your role?',
        name: 'role',
        choices: ['Engineer', 'Intern', 'Finish building the team']
    },

    ]).then(response => {

        // else if engineer
        if (response.role === 'Engineer') {
            promptForEngineer(); //    promptForEngineer
        }

        // if intern

        if (response.role === 'Intern') {
            promptForIntern(); //    promptForIntern
        }

        // if no more team members to add
        
        else if (response.role === 'Finish building the team'){
            //    use the functionality from page-template to generate the team
            const html = render(employees);
            fs.writeFile(outputPath, html, function (err) {
                if (err) throw err;
            });
        }

    })
}

const promptForEngineer = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: function (input) {
            const name = input.trim();
            if (!name || typeof name !== "string") {
                return "Please enter a valid name.";
            } else if (/\d/.test(name)) { // Check if the name contains any numbers
                return "Name cannot contain numbers.";
            } else if (/[^\w\s]/.test(name)) { // Check if the name contains any special symbols
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

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub name?',
        validate: function (input) {
            const github = input.trim();
            if (!github || typeof github !== "string") {
                return "Please enter a valid GitHub name.";
            } else if (/[^\w\s]/.test(github)) { // Check if the name contains any special symbols
                return "GitHub name cannot contain special symbols.";
            } else {

                return true;
            }

        },
    }

    ]).then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        employees.push(engineer);
        promptForNextEmployee();
    })
}

const promptForIntern = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: function (input) {
            const name = input.trim();
            if (!name || typeof name !== "string") {
                return "Please enter a valid name.";
            } else if (/\d/.test(name)) { // Check if the name contains any numbers
                return "Name cannot contain numbers.";
            } else if (/[^\w\s]/.test(name)) { // Check if the name contains any special symbols
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

    {
        type: 'input',
        name: 'school',
        message: 'What is your school?',
        validate: function (input) {
            const school = input.trim();
            if (!school || typeof school !== "string") {
                return "Please enter a valid school name.";
            } else if (/[^\w\s]/.test(school)) { // Check if the name contains any special symbols
                return "School name cannot contain special symbols.";
            } else {

                return true;
            }

        },
    }

    ]).then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        employees.push(intern);
        promptForNextEmployee();
    })
}

const buildPage = () => {
    // render(myArrayOfTeamMembers)
}
