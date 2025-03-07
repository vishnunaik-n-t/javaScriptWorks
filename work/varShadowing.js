function fn1(){
    var name="vishnu";

    return function fn2(){
        let name="suchi";
        console.log(name);
    }
}

let callIt=fn1();
callIt();