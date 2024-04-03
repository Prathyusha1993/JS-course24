function Person(name, age){
    this.name = name
    this.age = age
}

let person1 = new Person('Adam', 34);
console.log(person1);
person1.name = 'Steve';
console.log(person1);