class Person {
    constructor(firstName, lastName) {
        console.log(this)
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person = new Person();
// console.log(person);
const person1 = new Person('Rahul', 'Gupta');
const person2 = new Person("Mohit", 'gupta');
const person3 = new Person("Abhishek", "gupta");
console.log(person1);
console.log(person2);
console.log(person3);