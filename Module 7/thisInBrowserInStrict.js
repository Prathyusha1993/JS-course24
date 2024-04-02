'use strict'

console.log(this);  //in browser this is window obj


//function:
function displayThis() {
    console.log(this); 
}
displayThis();  //this in function in browser is undefined


//inside obj:
let myObj = {
    name: 'Mrunal',
    age: 32,
    myFunc: function() {
        console.log(this)  //referening to that particualr object itself;
    }
}
myObj.myFunc();


//func inside a func in obj:
let myObj2 = {
    name: 'Rashi',
    age: 34,
    myFunc2: function() {
         function myFunc3(){
            console.log(this);
         }
         myFunc3(); 
    }
}
myObj2.myFunc2();  //undefined