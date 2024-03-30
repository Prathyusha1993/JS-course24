//impure function

var a = 10;

function add(x) {
    console.log(x+a)
    a++
}
add(2);
add(2); //becoz of the external factor a output is changing so for pure func dont use external varibales which are changing output
add(2); //this is impure func example as everytime ooutput is changing but pure func are those where give same input result is same output

//pure function
function addPure(x, a) {
    // console.log(x+a); //console is external resource so use return 
    return x+a;
}
console.log(addPure(2, 3));  //given console what side of the func 
addPure(2, 3);
addPure(2, 3);
addPure(2, 3);