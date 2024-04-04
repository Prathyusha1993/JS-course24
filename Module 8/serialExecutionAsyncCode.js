const fs = require('fs');

console.log('First line')

// let data = fs.readFileSync('f1.txt') //this func works synchronously
// console.log('file 1 data'+ data);

// let data2 = fs.readFileSync('f2.txt')
// console.log('File 2 data'+ data2)


//now all the three function are excuting randomly to make them run seraily here it is
fs.readFile('f1.txt', cb1)   //func works asynchronously

function cb1(err, data){
    if(err){
        console.log(err)
    }
    console.log('file 1 data -> '+ data)
    fs.readFile('f2.txt', cb2) 
}

  //func works asynchronously

function cb2(err, data){
    if(err){
        console.log(err)
    }
    console.log('file 2 data -> ' + data) 
    fs.readFile('f3.txt', cb3)
}

   //func works asynchronously

function cb3(err, data){
    if(err){
        console.log(err)
    }
    console.log('file 3 data -> '+ data) 
}


console.log('Last line')