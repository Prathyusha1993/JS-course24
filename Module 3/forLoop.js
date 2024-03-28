//loops are statements to control the flow of program to do some repeatative task

var a = 'Hello World';

//the for loop
for(var i=0; i<10; i++) {
 console.log(i)
 console.log(a)
}

//you have an array and need to square each element in the array.
let arr = [2, 4, 3, 6, 5, 7];

var squaredArr =[];
for(var i=0; i<arr.length; i++) {
   squaredArr.push(arr[i]*arr[i])
}
console.log(squaredArr);
