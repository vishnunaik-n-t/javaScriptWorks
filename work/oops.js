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


// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.makeSound = function () {
//     console.log("Some sound...");
// };

// function Dog(name) {
//     Animal.call(this, name);  
// }

// Dog.prototype = Object.create(Animal.prototype);  
// Dog.prototype.constructor = Dog;

// Dog.prototype.makeSound = function () {
//     console.log("Woof! Woof!");
// };



// const dog = new Dog("Buddy");
// dog.makeSound();
// console.log(dog.name);



// function counter(){
//     let count=0;

//     this.increment=function(){
//         count++;
//         console.log(count);
//     }

//     decrement=function(){
//         count--;
//         console.log(count);
//     }
// }

// const c1=new counter();
// console.log(c1.count);  //undefined


// function user(name){
//     this.name=name;

//     this.getName=function(){
//         return this.name;
//     };
// }

// const user1=new user("vishnu");
// const user2=new user("suchi");

// console.log(user1.getName());
// const takeName=user1.getName;
// console.log(takeName());

// function User(name) {
//     this.name = name;
    
//     this.getName = function() {
//         return this.name;
//     };
// }

// const user1 = new User("Vishnu");

// const getNameFn = user1.getName.bind(user1);
// console.log(getNameFn());   

// function User(name) {
//     this.name = name;
    
//     this.getName = function() {
//         return this.name;
//     };
// }

// const user1 = new User("Vishnu");

// const getNameFn = user1.getName;
// console.log(getNameFn.call(user1));  


// const button = {
//     text: "Click Me",
//     handleClick: function() {
//         console.log(this.text);
//     }
// };

// document.body.text = "Hello, Body!";
// document.body.addEventListener("click", button.handleClick);


// function counter(){
//     this.count=0;

//     setTimeout(()=>{
//         this.count++;
//         console.log(this.count);
//         console.log("execute");
//     }, 1000);
// }

// const counter1= new counter();


// class person{
//     constructor(name){
//         this.name=name;
//     }

//     printName(){
//         console.log(this.name);
//     }
// };

// const user=new person("vishnu");

// const user1=person.printName;
// console.log(user1.printName());


// class account{
//     constructor(AccountNumber,AccountHolderName,balance){
//         this.AccountNumber=AccountNumber;
//         this.AccountHolderName=AccountHolderName;
//         this.balance=balance;
//     }

//     deposit(amount){
//         this.balance+=amount
//     }

//     withdraw(amount){
//         if(this.balance>=amount){
//             this.balance-=amount
//         }else{
//             console.log("insafficient funds");
//         }
//     }

//     getBalance(){
//         return this.balance;
//     }
// }


// const bank1=new account(123,"vishnu",700);
// const bank2=new account(123,"panda",1200);

// bank1.deposit(700);

// bank2.withdraw(200);

// console.log(bank1.getBalance());
// console.log(bank2.getBalance());