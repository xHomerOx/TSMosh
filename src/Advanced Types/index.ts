//Given the data below, define a type alias for representing users.

type Address = {
    street?: String
}

type Users = {
    name: String,
    age: Number,
    occupation?: String,
    address?: Address
}

let user_1: Users = {
    name:'John Smith',
    age:30,
    occupation:'Software engineer'
}

let user_2: Users = {
    name:'Kate Müller',
    age:28
}

//Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these.

type Birds = {
    fly(): Boolean
}

type Fish = {
    swim(): Boolean
}

let pet: Birds | Fish;

//Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type Days = {
    Monday: String,
    Tuesday: String,
    Wednesday: String,
    Thursday: String,
    Friday: String,
    Saturday: String,
    Sunday: String
}

//Simplify the following code snippets:

function getUser(name: String, age: Number, occupation?: String, address?: Address): Users {
    return { name, age, occupation, address };
}

let myUser = getUser('John Doe', 30, 'Software engineer');
console.log(myUser?.address?.street);


let foo: String = 'foo';

function bar() {
    return 'bar';
}

let myX = foo ?? bar();

//What is the problem in this piece of code?

let value: unknown = 'a'; 
if (typeof value === 'string')
    console.log(value.toUpperCase());