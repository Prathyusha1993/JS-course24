//find method: returns thr first element of an array that satify the condition

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let firstWithdrawal = transactions.find((n) => {
    return n<0
})
console.log('first withdrawal', firstWithdrawal);

//findIndex method: finds the index of that particular first element that satisfy conditions
let firstWithdrawalIndex = transactions.findIndex((n) => {
    return n<0
})


console.log('first withdrawal Index',firstWithdrawalIndex);