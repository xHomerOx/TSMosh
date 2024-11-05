/* Define a class called Logger that takes the name of a file in its constructor and provides
a method for writing messages to that file. Don’t worry about the actual file I/O
operations. Just define the class with the right members. */

class Logger {
    constructor(public file: string) {
        this.file = file;
    }

    writeMsg(text: string) {
        console.log('Writing to file: ' + this.file + ' ' + text);
    }
}

let logger = new Logger('log.txt');
logger.writeMsg('Hello Otello!!!!');

//Given the Person class below, create a getter for getting the full name of a person.

class Person3 {
    constructor(public firstName: string, public lastName: string) {}

    get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(name: string) {
        this.fullName = name;
    }
}

let person = new Person3('Otello', 'Boz Maraldo');

console.log(person.fullName);

//Create a new class called Employee that extends Person and adds a new property called salary.

class Employee2 extends Person3 {
    constructor(firstName: string, lastName: string, public salary: number) {
        super(firstName, lastName);
    }
}

//What is the difference between private and protected members?

//Private members can only be accessed within the class they are defined in, while protected members can be accessed within the class they are defined in and by any class that extends that class.

//Given the data below, define an interface for representing employees:

interface Employee2 {
    name: string;
    salary: number;
    address: Address2;
};

interface Address2 {
    street: string;
    city: string;
    zipCode: number;
}

let employee2 = {
    name: 'John Smith',
    salary: 50_000,
    address: {
        street: 'Flinders st',
        city: 'Melbourne',
         zipCode: 3144,
    },
};