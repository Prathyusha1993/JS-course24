class Person {
constructor(name, age){
this.name = name
this.age = age
}
welcome() {
    console.log(`Welcome ${this.name}`)
}

}

class Teacher extends Person{
    constructor(name, age, classStrength){
        super(name, age)
        this.classStrength = classStrength
    }
    test() {
        super.welcome()
    }
}

class Student extends Person {
    constructor(name, age, cgpa) {
        super(name,age)
        this.cpga = cpga    }
}

let person1 = new Person('Adam', 25);
console.log(person1);

let teacher = new Teacher('Mark', 40, 45)
teacher.test();