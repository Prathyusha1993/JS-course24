// the for-of statement creates a loop iterating over iterable objects
//including: built in stirng, array, arrya-like objects like nodelist and also map and set
//for-of is arrays and string

var scores = [60, 70, 90, 57, 75, 89];
for(var score of scores){
    score = score+5
    console.log(score)
}

let colors=['red', 'yellow', 'pink']
for(var [index, color] of colors.entries()) {
console.log(index + '=>'+color)
}

//string
var str = 'scaler';
for(var c of str ){
    console.log(c)
}