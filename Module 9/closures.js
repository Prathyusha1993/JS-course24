//lexical scope:
//these are nested funcitons where inner function always have access to outer scope function when function define  inside function

function test() {
    let a = 2
    function test1(){
        console.log(a)
    }
    return test1
}

let fun = test();
console.log(fun);
fun()