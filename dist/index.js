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
console.log(typeof account);
console.log(account instanceof Account);
//# sourceMappingURL=index.js.map