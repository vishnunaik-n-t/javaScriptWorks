
//🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐some example on promise how it works and its syntax

// let p = new Promise((res, rej) => {
//     setTimeout(function () {
//         console.log("Hello, Vishnu!");
//         res();
//     }, 2000);
// });

// p.then(() => console.log("Promise Resolved!"));


// 🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐promise chaning how to use it

// function doubleAfter2Seconds(num){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res(num*2);
//         }, 2000);
//     });
// }

// doubleAfter2Seconds(10)

// .then(result=>{
//     console.log(result);
//     return doubleAfter2Seconds(result);
// })
// .then(result=>{
//     console.log(result);
//     return doubleAfter2Seconds(result);
// });
// doubleAfter2Seconds().then(result=>{
//     console.log(result);
// });



// 🧐🧐🧐🧐🧐🧐🧐🧐how to handle errors in promises 

// function doubleAfter2Seconds(num){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//              if(typeof num != "number"){
//                 rej("Error: not a number");
//              }else{
//                 res(num*2);
//              }
             
//         },2000);
//     });
// }

// doubleAfter2Seconds('5')
//     .then(result=>{
//         console.log(result);
//     })
//     .catch(error=>{
//         console.log(error);
//     });

// doubleAfter2Seconds(87)
//     .then(result=>{
//         console.log(result);
//     })
//     .catch(error=>{
//         console.log(error);
//     })



// 🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐how to use Promise.All 

// function fetchData(id){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if(Math.random()<0.3){
//                 rej(`Error: Failed to fetch the data for id: ${id}`);
//             }else{
//                 res(`data for id: ${id}`);
//             }
//         });
//     });
// }

// Promise.all([fetchData(1), fetchData(2), fetchData(3)])
// .then(result=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.log(error);
// })

//🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐 the below code uses promise.allSettled(). we use this because if any one fails also other should give the output

// function fetchData(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() < 0.3) {
//                 reject(`Error: Failed to fetch data for ID: ${id}`);
//             } else {
//                 resolve(`Data for ID: ${id}`);
//             }
//         }, 1000);
//     });
// }

// Promise.allSettled([fetchData(1), fetchData(2), fetchData(3)])
//     .then(res => {
//         console.log("Result:", res);
//     });



//🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐use of promise.race() it actually give the result on which promise is executed first and discards rest

// function fetchDataWithDelay(id,delay){
//     return new Promise((response)=>{
//         setTimeout(()=>{
//             response(`Data for ID: ${id}`);
//         }, delay);
//     });
// }

// Promise.race([fetchDataWithDelay(1,3000), fetchDataWithDelay(2,2000), fetchDataWithDelay(3,1000)]).then(result=>{
//     console.log(result);
// })



//if we want to Abort the other promise after the first execution is done then we use this one 

 

// function fetchDataWithDelay(id, delay, signal) {
//     return new Promise((resolve, reject) => {
//         const timeout = setTimeout(() => {
//             resolve(`Data for ID: ${id}`);
//         }, delay);

//         // Listen for abort event
//         signal.addEventListener("abort", () => {
//             clearTimeout(timeout); // Cancel timeout
//             reject(new Error(`Request for ID: ${id} aborted`));
//         });
//     });
// }

// const controller = new AbortController();
// const signal = controller.signal;

// Promise.race([
//     fetchDataWithDelay(1, 3000, signal),
//     fetchDataWithDelay(2, 2000, signal),
//     fetchDataWithDelay(3, 1000, signal)
// ])
// .then(result => {
//     console.log(result);
//     controller.abort();  
// })
// .catch(error => {
//     console.log("Error:", error);
// });

