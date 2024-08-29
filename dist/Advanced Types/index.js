"use strict";
let user_1 = {
    name: 'John Smith',
    age: 30,
    occupation: 'Software engineer'
};
let user_2 = {
    name: 'Kate Müller',
    age: 28
};
let pet;
function getUser(name, age, occupation, address) {
    return { name, age, occupation, address };
}
let myUser = getUser('John Doe', 30, 'Software engineer');
console.log(myUser?.address?.street);
let foo = 'foo';
function bar() {
    return 'bar';
}
let myX = foo ?? bar();
let value = 'a';
if (typeof value === 'string')
    console.log(value.toUpperCase());
//# sourceMappingURL=index.js.map