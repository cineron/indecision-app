import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

class OldSyntax {
    constructor() {
        this.name = "Mike";
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi. My name is ${this.name}.`;
    }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax);
console.log(oldSyntax.getGreeting());
const getGreeting = oldSyntax.getGreeting; //breaks because of 'this' binding WITHOUT assigning and binding (line 10)
console.log(getGreeting()); 


// ---- ESnext syntax ----

class NewSyntax {
    name = "Jen";
    // use of arrow function automatically binds 'this'
    getGreeting = () => {
        return `Hi. My name is ${this.name}.`;
    }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());
