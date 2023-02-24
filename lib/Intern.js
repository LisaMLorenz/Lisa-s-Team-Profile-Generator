// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) { // and whatever else is necessary
        super(name, id, email);
        this.school = school;

        this.getSchool();
        this.getRole(); // overridden to return intern
    }

    getSchool() {
        // code to get employee name
        return this.school;
    }

    getRole() {
        // code to override and make Intern
        return "Intern";
    }
}

module.exports = Intern;