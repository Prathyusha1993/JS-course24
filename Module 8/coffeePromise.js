const placeOrder = (drink) => {
    return new Promise((resolve, reject) => {
        if(drink === 'coffee'){
            resolve('Order for coffee received')
        } else {
            reject('Other orders rejected')
        }
    })
}

function processOrder(order) {
    return new Promise((resolve) => {
        console.log('Order is being processed')
        resolve(`${order} is served`);
    })
}

// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderIsProcessed = processOrder(orderPlaced)
//     return orderIsProcessed
// }).then(function(processedOrder){  //chaining of promise
//     console.log(processedOrder)
// }).catch(function(err) {
//     console.log(err)
// })


//to solve the chaining of promises we can use async await 
//async await are keywords

async function serveOrder(){
    try {
        let orderPlaced = await placeOrder('coffee')
    console.log(orderPlaced)
    let processedOrder = await processOrder(orderPlaced)
    console.log(processedOrder)
    } catch(error) {
        console.log(error)
    }
    
}
serveOrder()

//example
const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'two');
});

// Promise.race({firstPromise, secondPromise}).then(result => console.log(result));


//example
var p = new Promise((res, reject) => {
    reject(Error('Promise failed!!'))
})
p.catch(error => console.log(error.message))
p.catch(error => console.log(error.message))