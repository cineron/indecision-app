
class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;      
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old!`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        //logical Not statement
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

//CHALLENGE: Traveler extends Person
class Traveler extends Person {
    constructor(name, age, home){
        super(name, age);
        this.home = home;
    }
    hasHome(){
        return !!this.home;
    }
    getGreeting(){
        let greeting = super.getGreeting();

        if (this.hasHome()){
            greeting += ` Their home is ${this.home}.`;
        }
        return greeting;
    }
}

// const me = new Person("Ron", 44);
// console.log(me.getGreeting());
// console.log(me.getDescription());

// const other = new Person();
// console.log(other.getGreeting());
// console.log(other.getDescription());

const me2 = new Student("Joe", 24, "Computer Science");
// console.log(me2.hasMajor());
// console.log(me2.getGreeting());
console.log(me2.getDescription());

const other2 = new Student();
// console.log(other2.hasMajor());
// console.log(other2.getGreeting());
console.log(other2.getDescription());

const tourist = new Traveler("Susie", 33, "Austin");
console.log(tourist.getGreeting());
