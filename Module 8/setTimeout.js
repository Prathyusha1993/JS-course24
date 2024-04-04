//setTImeout will always take a callback and time setTimeout(cb, 2000)

console.log('before')
function greet(){
    console.log("hello from set timeout")
}

setTimeout(greet, 5000);
console.log('after')