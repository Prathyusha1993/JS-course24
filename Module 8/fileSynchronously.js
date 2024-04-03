const fs = require('fs');

console.log('First line')

let data = fs.readFileSync('f1.txt')

console.log('file 1 data' + data);




console.log('Last line')