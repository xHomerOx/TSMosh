/* Including JS Code in TS Projects */

import { calculateTax } from './tax';

let tax = calculateTax(3000);
console.log(tax);

/* Type Checking JS Code */

// let tax2 = calculateTax();
// console.log(tax2);

/* Describing Types using JSDoc */

let tax3 = calculateTax(10_000);
console.log(tax3);

/* Creating Declaration Files */

let tax4 = calculateTax(1);
console.log(tax4);

/* Using Definitely Typed Declaration Files */

import * as _ from 'lodash';

_.clone([1, 2, 3]);