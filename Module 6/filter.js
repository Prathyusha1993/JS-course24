//filter method: 

//you have to check even numbers in array and put them in seperate array
let numbers = [1,2,20, 30, 40, 34, 17, 35, 22, 12];
let evenArr = [];
//this is a old method of writing 
for (let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 == 0)
    evenArr.push(numbers[i])
}
console.log(evenArr);


 //instead we can use filter method which return a new array as result for all those elememts that matches specific condition
 //if condition is true it will return the element for that condition and if it is false it will discard
const resultArr = numbers.filter((n) => {
    return n % 2 == 0
})

console.log(resultArr);

//another ex:
const transactionsEvery = [100, 3000, 4000, 2000, -898, -3800, -4500];
const checkPositive = transactionsEvery.filter((n) => {
    return n > 0;
})

console.log(checkPositive);