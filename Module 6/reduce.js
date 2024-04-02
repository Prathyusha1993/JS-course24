//  you need the sum of every element in array

let num = [1,2,3,4,5,6];
let sum=0;
for(let i=0; i<num.length; i++){
sum = sum + num[i];
}
console.log(sum);


//using reduce mehtod : calculate the sum of every elememnt in array
const result = num.reduce((acc, value) => {
   let updatedSum = acc+value;
   return updatedSum
})
console.log(result);

const product = num.reduce((acc, value) => {
    let updatedProd = acc*value;
    return updatedProd
 })

 console.log(product);