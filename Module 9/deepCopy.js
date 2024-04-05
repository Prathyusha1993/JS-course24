let firstPerson = {
    name: 'Adam',
    age: 23,
    address: {
        city: 'lucknow',
        state: 'UP'
    }
}

let secondPerson = JSON.parse(JSON.stringify(firstPerson)) //this is a best way to do deep copy the object
console.log(firstPerson)
console.log(secondPerson)

secondPerson.address.city = 'Delhi';
console.log(firstPerson)
console.log(secondPerson)