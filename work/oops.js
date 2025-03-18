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



// class Vehicle{
//     constructor(brand, model, year){
//         this.brand=brand;
//         this.model=model;
//         this.year=year;
//     }
//     getDetails(){
//         return `${this.brand} ${this.model} (${this.year})`;
//     }
// }

// class Car extends Vehicle{
//     constructor(brand, model, year, fuelType){
//         super(brand, model, year);
//         this.fuelType=fuelType;
//     }

//     getDetails(){
//         return `${this.brand} ${this.model} (${this.year}) - ${this.fuelType}`;
//     }
// }

// const vehicle=new Vehicle("BMW", "S3", 2025);
// const car=new Car("BMW", "S3", 2025, "Petrol");


// console.log(car.getDetails());
// console.log(vehicle.getDetails());


class Shape{
    constructor(name){
        this.name=name;
    }
    calculateArea(){
        return 0;
    }
}

class Rectangle extends Shape{
    constructor(name,width, height){
        super(name);
        this.width=width;
        this.height=height;
    }

    calculateArea(){
        return this.width*this.height;
    }
}

class Circle extends Shape{
    constructor(name, radius){
        super(name);
        this.radius=radius;
    }

    calculateArea(){
        return Math.ceil(Math.PI*this.radius*this.radius);
    }
}


const rectangle=new Rectangle("rectangle", 20, 10);
const circle=new Circle("circle", 15);

console.log(rectangle.calculateArea());
console.log(circle.calculateArea());