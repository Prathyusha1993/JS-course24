//callback funcs:  is a function thta is passed into another function as an argument. This function can be invoked at alalater stage of time

function printFirstName(firstName, callbackk) {
    console.log(firstName, callbackk);
    callbackk('Rogers')
}

function printLastName(lastName) {
    console.log(lastName);
}

printFirstName('Steve', printLastName); //callback func




const isEven = (n) => {
    return n%2 == 0
}
let printResult = (evenFn, num) => { 
    const isnNumEven = evenFn(num)
    console.log(`thenumber ${num} is an even numner ${isnNumEven}`)
}

printResult(isEven, 16);


