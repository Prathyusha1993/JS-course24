let arr = [
    {name: 'A', age:13, gender: 'M'},
    {name: 'B', age:14, gender: 'M'},
    {name: 'C', age:15, gender: 'F'},
    {name: 'D', age:16, gender: 'M'},
    {name: 'E', age:17, gender: 'f'},
    {name: 'F', age:18, gender: 'M'},
    {name: 'G', age:19, gender: 'F'},
    {name: 'H', age:20, gender: 'F'},
    {name: 'AI', age:23, gender: 'M'},
];

// let males = arr.filter((n) => {
//     return n.gender == 'M'
// })

// let ageOfMales = males.map((male) => {
//     return male.age;
// })   //instead of writing two methods we can modify it.

let ageofmales = arr.filter((n) => {
        return n.gender == 'M'
}).map((male) => {
    return male.age;
})

// console.log(males);
// console.log(ageOfMales);

console.log(ageofmales);


//another example:
const transactions = [10000, 3000, 4000, 2000, -898, -3800, -4500];

const result = transactions.filter((fil) => {
    return fil > 0
}).reduce((acc, value) => {
    return acc+value;
})

console.log(result);