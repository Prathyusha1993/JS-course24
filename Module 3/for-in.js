//in js the for-in loop allows you to loop through the properties of an object
// the statements of code found within th eloop body will be excueted once for the property of the objects
//for-in loop used for objects and arrays

var colors = {
    primary: 'Blue',
    secondary: 'Red',
    teritary:'White'
}

//for-in loop
for(var color in colors) {
    console.log(color + ' -> ' +colors[color]);
}

var colorsArr = ['pink', 'yellow', 'orange', 'black', 'gray'];
for(var color in colorsArr) {
    console.log(color + '->' +colorsArr[color]);
}