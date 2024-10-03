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

    private calculateTax() {

    }

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

