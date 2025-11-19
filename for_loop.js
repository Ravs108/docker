//print numbers 1 to 10 using for loop 
/*



for (let num = 0; num <= 10; num++){
    console.log(num )
}

num = 0;
 while( num <= 10) {
    console.log(num);
    num++;
 }

 */

// print all even numbers from 0 to 20

// for (let num = 0; num <= 20; num++) {
//     if (num % 2 == 0) {
//         console.log(num + " is even");
//     }
// }

let num = 0
while (num <= 20) {
    if (num % 2 == 0) {
        console.log(num + " is even")        
    } else {
        console.log(num + " is odd")
    }
    num++
}

