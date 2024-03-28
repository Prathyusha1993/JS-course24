//90 to 100 - A
//70 to 89 - B
//50 to 69 - C
//lower than 50 - Fail


var studentScore = 65;

if(studentScore > 90) {
    console.log('Student has scored an A grade')
} 
else if (studentScore >= 70 && studentScore <= 89){
    console.log('Student has scored an B grade')
} 
else if (studentScore >= 50 && studentScore <= 69) {
    console.log('Student has scored an C grade')
}
 else {
    console.log('Student has Failed')
 }