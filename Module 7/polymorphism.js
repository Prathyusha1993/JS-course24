class Animal{


    sound(){
        console.log('animals make different sounds')
    }
}

class Dog{


    sound(){
        console.log('Dog Barks')
    }
}

class Cat{


    sound(){
        console.log('Cat Mews')
    }
}

let animal1 = new Animal()

let tommy = new Dog()

let percy = new Cat()

tommy.sound()
percy.sound()
animal1.sound()