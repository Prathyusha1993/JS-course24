//in non-strict mode - consoling this is {} empty object
console.log(this);

//inside function:
function displayThis() {
    console.log(this); //in non strict mode - this inside function is global object with different functions
}
displayThis();


//inside object
let myObj = {
    name: 'Mrunal',
    age: 32,
    myFunc: function() {
        console.log(this)  //referening to that particualr object only;
    }
}
myObj.myFunc();


//fun inside func in object
let myObj2 = {
    name: 'Rashi',
    age: 34,
    myFunc2: function() {
         function myFunc3(){
            console.log(this);
         }
         myFunc3(); //its giving global object
    }
}
myObj2.myFunc2();
