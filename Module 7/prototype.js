let myObj = {}

console.log(myObj);

let person1 = {
    name: 'Adam',
    age: 34
}

console.log(person1);
console.log(person1.hasOwnProperty('gender'));

//constructor func
function Person(name, age) {
    this.name = name
    this.age = age
}

let person2 = new Person('Mark', 21);
console.log(person2);