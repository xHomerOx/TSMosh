"use strict";
class Account {
    id;
    owner;
    balance;
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        else {
            this.balance += amount;
        }
    }
}
let account = new Account(1, 'Otello', 0);
account.deposit(100);
class Account_2 {
    id;
    owner;
    _balance;
    nickname;
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        else {
            this._balance += amount;
        }
    }
    getBalance() {
        return this._balance;
    }
}
let account_2 = new Account(1, 'Otello', 0);
let account_3 = new Account_2(1, 'Otello', 0);
class Account_3 {
    id;
    owner;
    _balance;
    nickname;
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        else {
            this._balance += amount;
        }
    }
    get balance() {
        return this._balance;
    }
}
let account_4 = new Account_3(1, 'Otello', 0);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'Otello',
    seats.A2 = 'Luciano',
    seats['A3'] = 'Otello';
class Ride {
    static _activeRides = 0;
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides() {
        return Ride._activeRides;
    }
}
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('walking');
    }
}
class Student extends Person {
    studentId;
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('taking a test');
    }
}
let student = new Student(1, 'Otello', 'Boz Maraldo');
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
let teacher = new Teacher('Otello', 'Boz Maraldo');
class Principal extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
printNames([
    new Student(1, 'Otello', 'Boz Maraldo'),
    new Teacher('Otello', 'Boz Maraldo'),
    new Principal('Otello', 'Boz Maraldo')
]);
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
class Person2 {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('walking');
    }
}
class Student2 extends Person2 {
    studentId;
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        this.walk();
        console.log('taking a test');
    }
}
//# sourceMappingURL=index.js.map