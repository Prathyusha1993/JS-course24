let person1 = {
    firstName: 'Bhargavi',
    lastName: 'Kanchi',
    age: 32,

    // printDetails: function(){
    //     console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old`)
    // }
}

// person1.printDetails();

let person2 = {
    firstName: 'Prathyusha',
    lastName: 'kurigala',
    age: 30,

    // printDetails: function(){
    //     console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old`)
    // }
}

// person2.printDetails();


// instead of repeating printDeatils method evertime in obj we can use call method
//call method:
let printDetails2 = function(){
    console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old`)
}
printDetails2.call(person2)

let printDetails3 = function(city,power){
    console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old and I am from ${city} and I have the ${power}`)
}
printDetails3.call(person2, 'California', 'Iron man Armour');


//apply method:
printDetails2.apply(person2);
printDetails3.apply(person2, ['California', 'Iron man Armour']); //when using apply put the argumrnts in th array


//bind method:
let myFunc = printDetails3.bind(person2, 'California', 'Iron man Armour');
console.log(myFunc);

myFunc() 

