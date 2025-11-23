
// Algorithm: smallest amoung 3 numbers 
// 1. Define 3 numbers
// 2. Compare if first number is smaller than second and third - if so declare first number as smallest number
// 3. If step 2 is false, compare second and third number for the smallest. if second is bigger declare it as the smallest number or the other way around


let a = 10
let b = 30
let c = 5
if (a < b && a < c){
 console.log(" smallest number is"+ a)
}
else if(b < c){
    console.log("smallest number is" + b)
}else {
    console.log("smallest number is " + c)
}