// function fn1(){
//     var name="vishnu";

//     return function fn2(){
//         let name="suchi";
//         console.log(name);
//     }
// }

// let callIt=fn1();
// callIt();

const add=function(){
    var x=10;
    var x=20;

    console.log(x);

}

add()

 
function outer(){
     

    function inner(){
        console.log(x);
        var x=10;
    }
    inner();
}

outer();

console.log(num);
var num=84;

