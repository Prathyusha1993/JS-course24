//to do shallow copy we use spread operator

let firstPerson = {
    name: 'Adam',
    age: 23,
    address: {
        city: 'lucknow',
        state: 'UP'
    }
}

let secondPerson = {...firstPerson} //shallow copy using spread operator
console.log(firstPerson)
console.log(secondPerson)

firstPerson.name = 'Steve';
firstPerson.address.city = 'pune'  //here its changing for both so everytime we can't use spread operator 
console.log(firstPerson)
console.log(secondPerson)
