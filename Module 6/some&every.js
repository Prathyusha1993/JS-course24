//some method: condition check: to get true or false based on a condition
//it will return true if even 1 element satisfies the condition

const transactions = [-1000, -3000, -4000, 2000, -898, -3800, -4500];
let checkedValue = transactions.some((trans) => {
    return trans > 0
})
console.log(checkedValue);  //true, it only return true or false 


//every method: if every element in array will check to be true or else it will return false

const transactionsEvery = [100, 3000, 4000, 2000, 898, 3800, 4500];

// let resultEvery = transactions.every((trans) => {
//     return trans > 0
// }) //here return false using above array and not every element is positive to return true

let resultEvery = transactionsEvery.every((trans) => {
    return trans > 0
})
console.log(resultEvery);