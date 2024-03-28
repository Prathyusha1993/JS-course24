//Arrays provide you ordered collection of data with sequential index starting from 0
//it can also store multiple data types inside an array

var arr = [12, 'Honda', true, 12.4];
console.log(arr);

//accessing the elements from array
console.log(arr[0]);
var a = arr[1];
console.log(a);

//replacing values in array
arr[1] = 'Ferrari';
console.log(arr);

console.log('the length of an array is:', arr.length);

//inbuilt js array methods
var arr2 = [12,14,16,18,45,56];

//pop method - removes last elewment in array
arr2.pop()
console.log('pooped array', arr2);

//push method - adds an element in end of array
arr2.push(100);
console.log('push array', arr2);

//shift method - remove begininning element inarray
arr2.shift();
console.log('shift array', arr2);

//unshift metod - adds elemnt at the begininng of array
arr2.unshift(102);
console.log('unshifted array', arr2);