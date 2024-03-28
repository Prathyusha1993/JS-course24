//in js objects are unoredered collections of key valued pairs, each key value pair is called as a property

var person = {
    firstName: 'Abhiram',
    lastName: 'Digavinti',
    age: 25,
    ownsCar: false
};
console.log(person);

//dot notation to access values from object
console.log(person.age);
console.log(person.lastName);

//bracket notation to access values from objects
console.log(person['age']);
console.log(person['firstName']);

var capAme = {
    firstName: 'Steve',
    lastName: 'Rogers',
    age: 102,

    friends:['Bucky Barens', 'Bruce banner', 'Tony Stark', 'Elon Musk'],
    isAvenger: true,
    address: {
        streetNo: 134,
        StreetName: 'Nicolet',
        city: {
            name: 'Fremont',
            pincode: 54326
        },
        State: 'CA',
        country: 'USA'
    },
    hello() {
        console.log(this.type);
    }
};

console.log(capAme.friends[1]);
console.log(capAme.address);
console.log(capAme.address.city.name);
console.log(capAme.lastName);
console.log(capAme.address.country);
//we can update existing property in objects also
console.log(capAme.isAvenger = false);

capAme.movies = ['civil war', 'dummy', 'tibet'];
console.log(capAme);

//delete theproperty by using delete
delete capAme.age;
console.log(capAme);

console.log(capAme);