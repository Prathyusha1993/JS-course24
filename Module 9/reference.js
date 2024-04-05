let firstPerson = {
    name: 'Adam',
    age: 23
}

let secondPerson = firstPerson

console.log('First Person', firstPerson)
console.log('Second Person', secondPerson)

firstPerson.name = 'Steve'

console.log('First Person', firstPerson)
console.log('Second Person', secondPerson)