//the destructuring syntax is a js expression that makes it possible to unpack values
//from arrays or properties from objects, into distinct variables

let arr = ['Hi', 'I', 'am', 'Prathyusha'];

let a = arr[0];
let b = arr[1];

console.log(a, b);

//instead of doing like above we can destruct the array 
let [c,d,e,f] = arr; //in single line we can access all element from array and destruct
console.log(c);