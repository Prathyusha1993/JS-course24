//Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them. 
//in simple words, a higher order function is function that receives a function as an arguments or retun the function as output.

//map and forEach, filter, find, findIndex are examples of  higher order functions 


let arr = [1,2,3,4,5];
let squaredArr = []
for(let i=0; i<arr.length; i++) {
    squaredArr.push(arr[i]*arr[i]);
}
console.log(squaredArr);

//map: it will map through every elememnt of the array and will perform specific operation that you have provided
//map will always returns a new array with your results
const num = [1,2,3,4,5];
const squaredNum = num.map((n) => n*n);
console.log(squaredNum);

//another ex using map
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const intoDollar = 80;

let transactionsIntoDollar = transactions.map((trans) => {
    return (trans/intoDollar).toFixed(0);
})
console.log(transactionsIntoDollar);

//similar to map is forEach method but small difference is that it wont return  anything so need to use console and also it wont return as a array but like values
let transactionsInDollar = transactions.forEach((trans) => {
    console.log ((trans/intoDollar).toFixed(0));
})