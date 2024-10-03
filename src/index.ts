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
console.log(typeof account);
console.log(account instanceof Account);

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
console.log(account_3.getBalance());
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
console.log(account_4.balance);
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
