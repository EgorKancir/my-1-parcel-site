// 1

import { average } from "./test";
import { add } from "./calculator/add";
import { subtract } from "./calculator/subtract";
import { multiply } from "./calculator/multiply";
import { divide } from "./calculator/divide";
import { printResult } from "./calculator/print-result";
import { sumFun } from "./sum";
import './hw-code';

const numbers = [1, 2, 3, 4, 5]; 
const avg = average(numbers);
console.log(`Average: ${avg}`);

// 2

let a = 10;
let b = 5;


let sum = add(a, b);
let difference = subtract(a, b);
let product = multiply(a, b);
let quotient = divide(a, b);


printResult(sum);
printResult(difference);
printResult(product);
printResult(quotient);

// 3
const result = sumFun(numbers);
console.log(`Sum: ${result}`);