/* Any Type */

let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level;

// function render(document: any) {
//     console.log(document);
// }

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

function calculateTax(income: number, taxYear: number = 2024): number {
    // if (income < 50_000)
    if (taxYear < 2024)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000);

/* Objects */

// let employee: {
//     readonly id: number, 
//     name: string, 
//     retire: (date: Date) => void
// } = {
//     id: 1, 
//     name: 'Otello',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// };

// employee.name = 'Otello';

/* Type Aliases */

type Employee = {
    readonly id: number, 
    name: string, 
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1, 
    name: 'Otello',
    retire: (date: Date) => {
        console.log(date);
    }
}

/* Union Types */

function kgToLbs(weight: number | string): number {
    //Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;   
}

kgToLbs(10);
kgToLbs('10');

/* Intersection Types */

let weight: number & string;

type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

/* Literal Types */

type Quantity = 50 | 100;
//Literal (exact, specific)
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

/* Nullable Types */
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase);
    else
        console.log('Hola!');
}

greet(undefined);

/* Optional Chaining */

type Customer = {
    birthday?: Date;
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0  ? null : { birthday: new Date() }
}

let customer = getCustomer(1);
// if (customer !== null && customer !== undefined) 
//Optional property access operator
console.log(customer?.birthday?.getFullYear());

//Optional argument access operator
//if (customers !== null && customer !== undefined)
// customers?.[0];

//Optional call
// let log: any = (message: string) => console.log(message);
let log: any = null;
log?.('a');

/* Nullish Coaelscing Operator */

let speed: number | null =  null;
let ride = {
    //Falsy (undefined, null, '', false, 0)
    // speed: speed || 30
    // speed: speed !== null ? speed : 30
    //Nullish coaelscing operator
    speed: speed ?? 30
}

/* Type Assertions */

// let phone = document.getElementById('phone') as HTMLInputElement;
let phone = <HTMLInputElement> document.getElementById('phone');
//HTMLElement
//HTMLInputElement
phone.value

/* The unknown Type */

let x: any;

// function render(document: unknown) {
//     //Narrowing
//     if (document instanceof WordDocument) {
//         document.toUpperCase();
//     }
//     document.move();
//     document.fly();
//     document.wheteaverWeWant();
// }

/* The never Type */

function reject(message: string): never {
    throw new Error(message);
}

function processEvents(): never {
    while (true) {
        //Read a message from a queue
    }
}

reject('...');
// processEvents();
// console.log('Hello World');