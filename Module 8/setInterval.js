//setInterval: sets an interval of time and runs the function again

function hello(){
    console.log('Hello');
}

let timer = setInterval(hello, 1000); //after interval of 1sec this function excutes infinitly as ww didnt stop it

//to stop this interval we use clearInterval, to use clearInterval we use setTimeout.

setTimeout(function(){
    clearInterval(timer)
}, 3000)



setTimeout(function hello1(){
    console.log('hrjsd')
    clearInterval(timer)
}, 3000)