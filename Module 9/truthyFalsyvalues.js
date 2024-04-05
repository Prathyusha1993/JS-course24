let a = 2;
let b=0;
let c='';
let d='scaler'

if(a){      //truthy
// if(b){    //falsy
// if(c){     //falsy
// if(d){    truthy
    console.log("I am truthy");
} else {
    console.log('I am falsy')
}


//only these values are falsy rest everthing is true like empty [], {}, number, string, 
//false
//0 (zero)
//-0 (minus zero)
//0n (Bignt zero)
//'',"",`` (empty string)
//null
//undefined
//NaN

//exmaple:
// (function () {
//     if((-100 && 100 && "0") || [] === true || 0) {
//         console.log(1)
//         if([] || (0 && false)) {
//             console.log(2)
//         }
//         if(Infinity && NaN && 'false') {
//             console.log(3);
//             if(""){
//                 console.log(4)
//             }
//         } else {
//             console.log(5);
//             if(({} || false === "") && !(null && undefined)) {
//                 console.log(6);
//             }
//         }
//     }
// })();