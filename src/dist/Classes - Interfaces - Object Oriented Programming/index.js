"use strict";
class Logger {
    file;
    constructor(file) {
        this.file = file;
        this.file = file;
    }
    writeMsg(text) {
        console.log('Writing to file: ' + this.file + ' ' + text);
    }
}
let logger = new Logger('log.txt');
logger.writeMsg('Hello Otello!!!!');
class Person3 {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    set fullName(name) {
        this.fullName = name;
    }
}
let person = new Person3('Otello', 'Boz Maraldo');
console.log(person.fullName);
class Employee2 extends Person3 {
    salary;
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
;
let employee2 = {
    name: 'John Smith',
    salary: 50_000,
    address: {
        street: 'Flinders st',
        city: 'Melbourne',
        zipCode: 3144,
    },
};
//# sourceMappingURL=index.js.map