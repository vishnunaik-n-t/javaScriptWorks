// function vishnu(){
//     var nam="suchi";

//     console.log(name);
// }

// vishnu();

// console.log("this out side"+nam+" madam");


function outer(){
    var name="vishnu";

    return function inner(){
        console.log(name);
    }

    console.log("out function "+name);

}




