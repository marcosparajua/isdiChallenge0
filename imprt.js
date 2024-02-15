import { strictEquals } from './challenge.js';

console.log(strictEquals('A', 'B'));
console.log(strictEquals(1, 1));
console.log(strictEquals(NaN, NaN));
console.log(strictEquals(0, -0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(1, '1'));
console.log(strictEquals(true, false));
console.log(strictEquals(false, true));
console.log(strictEquals('water', 'oil'));
