//A while loop evaluates the condotion inside the parenthesis
//if the condition evaluates to true, the code inside the while loop is excuted.
//the condition is evaluated again.
//this process continues untill condition is false
//when the condition evaluates to false the loop stops.

//we have to print 1 to 10 with using the while loop

var i=1;
var n=10;

while(i<=n) {
    console.log(i)
    i++
}

//dowhile loop - small difference is that no matter what the condition is loop will run atleast once
var j=11;
var m=10;

do {
    console.log(j)
    j++
} while (j<=m)