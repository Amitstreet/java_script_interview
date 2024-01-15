// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// const person = new Person();

// // checking the prototype value
// console.log(Person.prototype); // { ... }

// constructor function
function Person() {
    this.name = 'John'
}

// add a property
Person.prototype.age = 20;

// creating an object
const person1 = new Person();

console.log(person1.age); // 20

// changing the property value of prototype
Person.prototype.age = 50 

// creating new object
const person3 = new Person();

console.log(person3.age); // 50
console.log(person1.age); // 20