let a = 2;
let b = 2;
let c = 4;
let d = '2'
console.log(a == b)
console.log(a == c)
console.log(a == d) //== will always check for values not type so here its returning true this is loose checking

// to check type we should use ===
console.log(a===d)  //here its false  and here it is strict checking
console.log(c===d)