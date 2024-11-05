/* Creating Classes */

class Account {
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }else{
            this.balance += amount;
        }
    }
}

/* Creating Objects */

let account = new Account(1, 'Otello', 0);
account.deposit(100);
// console.log(typeof account);
// console.log(account instanceof Account);

//Union
// if (typeof someObj === 'number') {}

/* Read-only and Optional Properties */

class Account_2 {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }else{
            //Record a transaction
            this._balance += amount;
        }
    }

    // private calculateTax() {

    // }

    getBalance(): number {
        return this._balance;
    }
}

let account_2 = new Account(1, 'Otello', 0);

/* Access Control Keywords */

let account_3 = new Account_2(1, 'Otello', 0);
// account_3.balance = -1;
// console.log(account_3.getBalance());
// account_3.calculateTax();

/* Parameter Properties */

class Account_3 {
    // readonly id: number;
    // owner: string;
    // private _balance: number;
    nickname?: string;

    constructor(
        public readonly id: number,
        public owner: string, 
        private _balance: number
    ) {
        // this.id = id;
        // this.owner = owner;
        // this._balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }else{
            //Record a transaction
            this._balance += amount;
        }
    }

    // private calculateTax() {

    // }

    get balance(): number {
        return this._balance;
    }

    // set balance(value: number) {
    //     if (value < 0)
    //         throw new Error('Invalid value');
    //     this._balance = value;
    // }
}

/* Getters and Setters */

let account_4 = new Account_3(1, 'Otello', 0);
// console.log(account_4.balance);
// account_4.balance = 1;

/* Index Signatures */

// let person = {};
// person.name = 'a';

class SeatAssignment {
    // A1, A2, ...
    // Boz Maraldo, Otello, ...
    // A1: string;
    // A2: string; //'Boz Maraldo Otello'
    // Index signature property
    [setNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Otello',
seats.A2 = 'Luciano',
seats['A3'] = 'Otello'
// seats.A3 = 1; //Type Error

/* Static Members */

class Ride {
    // passenger
    // pickUpLocation
    // dropOffLocation
    private static _activeRides: number = 0;

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

// console.log(Ride.activeRides);

/* Inheritance */

class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    walk() {
        console.log('walking');
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest() {
        console.log('taking a test');
    }
}

let student = new Student(1, 'Otello', 'Boz Maraldo');

/* Method Overriding */

class Teacher extends Person {
    override get fullName() {
        return 'Professor ' + super.fullName;
    }
}

let teacher = new Teacher('Otello', 'Boz Maraldo');
// console.log(teacher.fullName);

/* Polymorphism */

class Principal extends Person {
    override get fullName() {
        return 'Principal ' + super.fullName;
    }
}

printNames([
    new Student(1, 'Otello', 'Boz Maraldo'),
    new Teacher('Otello', 'Boz Maraldo'),
    new Principal('Otello', 'Boz Maraldo')
])

function printNames(people: Person[]) {
    for (let person of people)
        console.log(person.fullName);
}

/* Private vs Protected Members */

class Person2 {
    constructor(public firstName: string, public lastName: string) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    protected walk() {
        console.log('walking');
    }
}

class Student2 extends Person2 {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest() {
        this.walk();
        console.log('taking a test');
    }
}

/* Abstract Classes and Methods */