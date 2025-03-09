// class box{
//     constructor(length){
//         this.length=length;
//     }
//     display(){
//         console.log(this);
//     }
// }

// let obj1=new box(25);

// obj1.display();

// class bank{
//     #balence;

//     constructor(balence){
//         this.#balence=balence;
//     }

//     deposit(amount){
//         this.#balence+=amount;
//     }

//     getBalence(){
//         return this.#balence;
//     }
// }

// let obj=new bank(700);
// obj.deposit(700);
// console.log(obj.getBalence());
 

// class Animal {
//     constructor(name) {
//         if (new.target === Animal) {
//             // throw new Error("Cannot instantiate an abstract class.");
//         }
//         this.name = name;
//     }

//     makeSound() {
//         throw new Error("makeSound() must be implemented by subclass");
//     }
// }

// class Dog extends Animal {

//     makeSound() {
//         console.log("Woof! Woof!");
//     }
// }

// const dog = new Dog("Buddy");
// dog.makeSound();  

// const animal = new Animal("Unknown");  


// class Animal{
//     constructor(name){
//         this.name=name;
//     }

//     makeSound(){
//         console.log("woof woof");
//     }
// }

// class cat extends Animal{
//     constructor(model,name){
//         super();
//         this.model=model;
//     }

//     showDetails(){
//         console.log("model "+this.model);
//         this.makeSound();
//     }
// }

// const Cat=new cat("thor","vishnu");
// Cat.showDetails();
// Cat.makeSound();


function Animal(name) {
    this.name = name;
}

Animal.prototype.makeSound = function () {
    console.log("Some sound...");
};

function Dog(name) {
    Animal.call(this, name);  
}

Dog.prototype = Object.create(Animal.prototype);  
Dog.prototype.constructor = Dog;

Dog.prototype.makeSound = function () {
    console.log("Woof! Woof!");
};



const dog = new Dog("Buddy");
dog.makeSound();
console.log(dog.name);

