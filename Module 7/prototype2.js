function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.getNameAndAge = function() {
    console.log(`I am ${this.name} and my age is ${this.age}`)
}



let per = new Person('James', 34)

let per4 = new Person('Karthik', 45)

console.log(per.getNameAndAge);
console.log(per4)