let myObj = {
    name: 'John',
    age: 30,
    gender: 'M'
};

let {name, age, gender} = myObj;
console.log(name, age, gender);

//if i want change the key of name and other keys
let {name:n, age:a, gender:g} = myObj;
console.log(n, a, g);

let myObj1 = {
    name1: 'John',
    age1: 30,
    gender1: 'M',
    address:{
        country: 'USA',
        city: 'Fremont'
    }
};

let {name1, age1, gender1, address:{country, city}} = myObj1;
console.log(name1, age1, gender1, country, city);