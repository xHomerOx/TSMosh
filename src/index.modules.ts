/* Exporting and Importing */

// import { Circle2 } from "./shapes";

// import { Circle2 as MyCircle } from './shapes';
// const circle = new MyCircle(1);
// console.log(circle.radius);
// let circle =  new Circle2(1);

/* Module Formats */

import { Circle2 as MyCircle } from './shapes/shapes';
const circle = new MyCircle(1);
console.log(circle.radius);

/* Default Exports */

// import Store3, { Format } from './storage';

/* Wildcard Imports */

// import { Circle2, Square } from './shapes';
import * as Shapes from './shapes/shapes'

let circle2 = new Shapes.Circle2(1);
console.log(circle2.radius);

/* Re-exporting */

// import { Circle2 } from './shapes/Circle';
// import { Square } from './shapes/Square';

// import { Circle2, Square } from './shapes';