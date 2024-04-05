//undefined

let a;
console.log(a);  //undefined

let arr = [2,3,,5]
console.log(arr[2]) //undefined

function add(a,b){
    let c=a+b
    return c
}
let sum = add(3,4);
console.log(sum)

//null
let myLife = null;
console.log(myLife)

//not defined
console.log(b); //I haven't defined a variable b so its not defined
