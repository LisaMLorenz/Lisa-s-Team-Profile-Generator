// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) { // and whatever else is necessary
        super(name, id, email);
        this.github = github;

        this.getGithub();
        this.getRole(); // overridden to return engineer
    }

    getGithub() {
        // code to get employee name
        return this.github;
    }

    getRole() {
        // code to override and make Engineer
        return "Engineer";
    }
}

module.exports = Engineer;
