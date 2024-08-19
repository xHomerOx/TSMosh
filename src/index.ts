/* Any Type */

let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level;

function render(document: any) {
    console.log(document);
}

/* Arrays */

// let numbers: number[] = [1, 2, 3];
let numbers: number[] = [];
// numbers[0] = 1;
// numbers[1] = '1';

numbers.forEach(n => n.toFixed);

/* Tuples */

let user: [number, string] = [1, "Otello"];
user.push(1);

/* Enums */

// const small = 1;
const medium = 2;
const large = 3;

//PascalCase
const enum Size {
    small = 1, medium, large
}

let mySize: Size =  Size.medium;
console.log(mySize);

/* Functions */