// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) { // and whatever else is necessary
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.getOfficeNumber();
        this.getRole = function () {
            return "Manager";
        } // overridden to return manager
    }

    getOfficeNumber() {
        // code to get employee name
        return this.officeNumber;
    }
}

module.exports = Manager;