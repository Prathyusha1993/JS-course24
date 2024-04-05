function greet() {
  let name = "Mark";
  function displayName() {
    console.log("Hi " + name);
    let age = 25;

    function displayAge() {
      console.log("My age is " + age);
    }
    return displayAge;
  }
  return displayName;
}

let g1 = greet();
// console.log(g1);
// g1(); //dispalyName

let g2 = g1()
console.log(g2)
g2();
