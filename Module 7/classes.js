class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    welcome() {
        console.log(`Welcome ${this.name}`)
    }
}

let Person1 = new Person('Steve', 45);
let Person2 = new Person('James', 34);
let Person3 = new Person('Elon', 23);
let Person4 = new Person('Niece', 12);
let Person5 = new Person('Mark', 23);
Person3.welcome();
console.log(Person1);
console.log(Person2);
console.log(Person3);
console.log(Person4);
console.log(Person5);