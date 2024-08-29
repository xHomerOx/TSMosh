"use strict";
let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;
let level;
let numbers = [];
numbers.forEach(n => n.toFixed);
let user = [1, "Otello"];
user.push(1);
const medium = 2;
const large = 3;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2024) {
    if (taxYear < 2024)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10_000);
let employee = {
    id: 1,
    name: 'Otello',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10');
let weight;
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase);
    else
        console.log('Hola!');
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());
let log = null;
log?.('a');
let speed = null;
let ride = {
    speed: speed ?? 30
};
let phone = document.getElementById('phone');
phone.value;
let x;
function reject(message) {
    throw new Error(message);
}
function processEvents() {
    while (true) {
    }
}
reject('...');
//# sourceMappingURL=index.js.map