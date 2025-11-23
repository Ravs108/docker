// Algorithm
// 1. Define 3 numbers
// 2. Compare if first number is bigger than second and third - if so declare first number as biggest number
// 3. If step 2 is false, compare second and third number for the biggest. if second is bigger declare it as the biggest number or the other way around

let a = 20; 
let b = 50;
let c = 100;

if (a > b && a > c) {
    console.log('Biggest number is ' + a);
} else if (b > c) {
    console.log('Biggest number is ' + b);
} else {
    console.log('Biggest number is ' + c);
}

