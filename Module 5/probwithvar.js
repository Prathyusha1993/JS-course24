// var a = 21;
var a =  35;  //redeclaration of varibale so it prints 35
console.log(a);

if(a === 35){
    var b = 40;
    console.log(b);
}
//variables decalred with var keyword are not block scope they are function scoped
console.log(b); //40

function test() {
    var c = 100;
    console.log(c);
}
test();
console.log(c); //c is not defined