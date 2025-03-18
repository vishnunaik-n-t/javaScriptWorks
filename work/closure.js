// function outer(){
//     let count=0;

//     return function inner(){
//         count++;
//         console.log("calling inner"+count);
//     }
// }

// const callinner=outer();

// callinner();
// callinner();
// callinner();
// callinner();


// let outerr=(function(){
//     let count=0;
//     return {
//         inner:function (){
//             count++;
//             console.log("this is from inc outer "+count);
//         },
//         reset:function (){
//             count=0;
//             console.log("count reset done");
//             console.log(count);
//         }
//     }
// })();

// outerr.inner();
// outerr.inner();
// outerr.reset();

// function createTimers() {
//     for (let i = 1; i <= 6; i++) {
//         setTimeout(function () {
//             console.log(`Timer ${i}`);
//         }, 5000);
//     }
// }
// createTimers(); 



// function outer(){
//     let array=new Array(100).fill("vishnu");

//     return function innerHeight(){
//         console.log(array[0]);
//         array=null;
//     }
// }

// let callIt=outer();
// callIt();
// outer()();
// outer()();


// let message = "Vishnu";
// const btn = document.getElementById("btn");

// function clickHandler() {
//     console.log(message);
// }

// function attachEvent() {

//     btn.removeEventListener("click", clickHandler);
//     btn.addEventListener("click", clickHandler);
// }
// attachEvent();
// attachEvent();
// attachEvent(); 

// for(var i=0;i<=3;i++){
//     (function (j){
//         setTimeout(function (){
//             console.log(j);
//         },j*1000);
//     })(i);
// }

function once(fd) {
    let executed = false;
    
    return function (...args) {
        if (!executed) {
            executed = true;
            return fd(...args);
        } else {
            console.log("Function already executed!");
        }
    };
}

const initialize = once((name) => console.log(`Initialization done! ${name}`));
initialize("vishnu"); 
initialize();

function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(add(2)(3)(5)); 






