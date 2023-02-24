// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) { // or whatever parameters are required

        this.name = name;
        this.id = id;
        this.email = email;

        this.getName();
        this.getId();
        this.getEmail();
        this.getRole(); //returns Employee
    }


    getName() {
        // code to get employee name
        return this.name;
    }

    getId() {
        // code to get employee id
        return this.id;
    }

    getEmail() {
        // code to get employee email
        return this.email;
    }

    getRole() {
        return "Employee";
    }

}

module.exports = Employee;