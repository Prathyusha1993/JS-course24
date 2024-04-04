//Promises
//how to produce a promise

let myPromise = new Promise((resolve, reject) => {
    const a = 4
    // const b = 4
    const b = 3

    setTimeout(() => {
        if(a==b){
            resolve('The values are equal')
        } else {
            reject('The values are not equal')
        }
    }, 1000)
})

//this prints pending state
console.log(myPromise);

//fullfilled state - then method
myPromise.then(function(result){
    console.log(result)
})

//reject state - catch method
myPromise.catch(function(failedResult) {
    console.log(failedResult)
})

//at last your promise will be settled