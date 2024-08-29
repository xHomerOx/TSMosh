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
