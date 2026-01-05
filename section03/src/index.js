// 1. CJS
// const { add, sub } = require('./math.js');
// console.log(add(10, 20));
// console.log(sub(10, 20));

// 2. ESM
// import { add, sub } from './math.js';
// import multiply from './math.js';
import mul, { add, sub } from './math.js';

console.log(add(10, 20));
console.log(sub(10, 20));
console.log(mul(3, 2));

import randomColor from 'randomcolor';
const color = randomColor();
console.log(color);
