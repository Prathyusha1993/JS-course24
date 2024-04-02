// in strict mode
'use strict'

console.log(this);  //empty object in strict mode


//function: 
function displayThis() {
    console.log(this); 
}
displayThis();  //in strict mode this is undefined inside function

//func inside obj:
let myObj = {
    name: 'Mrunal',
    age: 32,
    myFunc: function() {
        console.log(this)  //referening to that particualr object only;
    }
}
myObj.myFunc();


//func inside func in obj:
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
myObj2.myFunc2(); //undefined 
