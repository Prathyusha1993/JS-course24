//we will be given a number and we ahve to check that if the square of that number is even or not

//this is a imperative way of writing a code
const a = 2;

let isEven;
if(a*a %2 == 0) {
    console.log('even number')
} else {
    console.log('odd number');
}

//declarative way of writing a cide
const checkSquare = (y) => (y*y % 2 == 0 ? 'even number' : 'odd number');
console.log(checkSquare(4));