let car12 = {
    name: 'X5',
    company: 'BMW',
    color: 'Red'
};

let car13 = {
    name: 'Q5',
    company: 'Benz',
    color: 'white'
}; //this is not a good way to use same key names for all objects

//constructor funcs act as a templates
function createCar(name, company, color) {
    this.name=name
    this.company=company
    this.color=color

    this.drive = function() {
        console.log(`I am driving ${this.name} and it is of ${this.color} color`)
    }
}

let car1 = new createCar('civic', 'Honda', 'Gray'); //create many objects wiht new keyword 
console.log(car1);

let car2 = new createCar('modelx', 'Tesla', 'Red');
console.log(car2);

car1.drive();
