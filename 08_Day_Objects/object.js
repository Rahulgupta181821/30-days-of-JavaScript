//scope.js
// a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10 // this is a global scope variable and found in the window object
// function letsLearnScope() {
// //   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
//   let c=1;
// }
// console.log(a, b) // accessible
// console.log(letsLearnScope)


//scope.js
// c=10;
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//     let d=5;
//   console.log(a, b) // JavaScript 10, accessible
//   if (true) {
//     let a = 'Python'
//     let b = 100
//     console.log(a, b) // Python 100
//   }
//   console.log(a, b)
// }
// letsLearnScope()
// console.log('a',a, b,"d:",d) // JavaScript 10, accessible
// function letsLearnScope() {
//     var gravity = 9.81
//     console.log(gravity)

//   }
//   letsLearnScope();
//   console.log(gravity)
// function newScope(){
//   if (true){
//       var gravity = 9.81
//       console.log(gravity) // 9.81
//     }
//     console.log(gravity)
// }

//   newScope();

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`
//     }
//   }
//   person.nationality = 'Ethiopian'
//   person.country = 'Finland'
//   person.title = 'teacher'
//   person.skills.push('Meteor')
//   person.skills.push('SasS')
//   person.isMarried = true

//   person.getPersonInfo = function() {
//     let skillsWithoutLastSkill = this.skills
//       .splice(0, this.skills.length - 1)
//       .join(', ')
//     let lastSkill = this.skills.splice(this.skills.length - 1)[0]

//     let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//     let fullName = this.getFullName()
//     let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
//     return statement
//   }
//   console.log(person)
//   console.log(person.getPersonInfo())
//   const copyPerson = Object.assign({}, person);
//   copyPerson.skills.push("rahul");
//   console.log(copyPerson)
//   console.log(person)
//   console.log(Object.keys(copyPerson));
//   console.log(Object.entries(copyPerson));
//   console.log(copyPerson.hasOwnProperty("skill"));
//scope.js
// a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10 // this is a global scope variable and found in the window object
// function letsLearnScope() {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// console.log(a, b) // accessible
//scope.js
// function letsLearnScope() {
//   var gravity = 9.81
//   console.log(gravity)

// }

// letsLearnScope();
// console.log(gravity)//, Uncaught ReferenceError: gravity is not defined

// if (true){
//   var gravity = 9.81
//   console.log(gravity) // 9.81
// }
// console.log(gravity)  // 9.81

// for(var i = 0; i < 3; i++){
//   console.log(i) // 0, 1, 2
// }
// console.log(i) // 3
// function letsLearnScope() {
//     // var gravity = 9.81
//     console.log(gravity)

//   }
//   letsLearnScope();
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
            // return `${person.firstName} ${person.lastName}`// both are same.
    }
}

console.log(person.getFullName())
    // Asabeneh Yetayeh
const entries = Object.entries(person)
console.log(entries)
    //Using the includes() method to check multiple items in array:


const array = [1, 2, 3, 4, 5];

const itemsToCheck = [2, 4];

const allItemsExist = itemsToCheck.every(item => array.includes(item));

console.log(allItemsExist); // Output: true