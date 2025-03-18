let obj={
    name1:"vishnu",
    class1:11,
    age:22
}

let {name1,cls,age}=obj;

console.log(name1);
console.log(cls);
console.log(age);

const person={
    name:"vishnu",
    age:21,
    branch:"cse",
    sec:'c',
    usn:184
}


for(let [persn, field] of Object.entries(person)){
    console.log(persn+" "+field);
}

for(let x in person){
    console.log(x+" : "+person[x]);
}

const myArray=Object.values(person);

console.log(myArray);


console.log(Date());

b=3;
c=5;
const d=b+c;


console.log(d);
var a = 10;  

function add() {
    console.log(a);  
}

add();  

console.log(a);  