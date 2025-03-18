function greet(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: "Vishnu" };

const greetVishnu = greet.bind(person, "Hey");
greetVishnu("!!!"); 
