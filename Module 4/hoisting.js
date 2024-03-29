
console.log(a); //but here it prints undefined as a is out of scope 
//so its always good to decalre your variables at top of file.
greet();
add(7, 8);


var a = 'hiiiiiii';

function greet() {
    console.log('Hello From Me to You');
}

// console.log(a); //this runs without prob
// greet();

var add = function (a, b) {
    console.log(a+b)
}
// add(7, 8) //here it gives 15 but if call this function at above the file