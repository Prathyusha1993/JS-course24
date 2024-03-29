var a = 20;

var a = 35; //here redecalring so it will print 35

let b = 30;
// let b = 45; //with let we cannot redeclare the var b 
b = 300; //with let we can reassign but no redeclaring

console.log(a);
console.log(b);

//scoping
//variables declared with let keyword are block scoped 
if(true){
    let c = 400;
    console.log(c);
}

// console.log(c); //c is 400 when it is var but when it changed to let its c is not defined


//const keyword:
//whreas in const we cannot redecalre and reassign also
const d = 5000; //here there is no way of redecalring and reassigning
// d = 6000; //reassiging throws error
// const d = 7000; //redeclaring also throws error
console.log(d);

//const is also block scope
if(true ) {
    const e = 12;
    console.log(e);
}

// console.log(e); //e is not defined as its block scope we canot access outside of it
